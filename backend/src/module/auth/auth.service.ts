import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AccessTokentype, EmailVerifyPayloadTypes, EmailVerifyTokenType, JWTPayloadTypes, RefreshPayload, Tokens } from '../../common/utils/types/types';
import {  SignupDto } from './dto/signup.dto';
import { MailService } from '../mail/mail.service';
import { RedisService } from '../redis/redis.service';

import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { SigninDto } from './dto/signin.dto';
import { UpdateUserDto } from '../user/dto/update-user.dto';


@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly userService: UserService,
    private readonly mailService: MailService,
    private readonly configService: ConfigService,
    private readonly redisService: RedisService,
  ) {}

  async signup(signupDto: SignupDto) : Promise <any> {
    const createdUser =await this.userService.create(signupDto);

    const emailVerifyToken:EmailVerifyTokenType  = await this.signEmailVerifyToken(createdUser.id)
    const baseUrl = this.configService.get<string>('API_Backend_URL') ?? 'http://localhost:3000';

    await this.mailService.sendVerificationEmail(
      createdUser.email, 
      createdUser.name,
      emailVerifyToken.emailVerifyToken,
      baseUrl
      );


     return { status: true ,  message : 'User created successfully, please verify your email' }
   
  }
  
  async login(user: any): Promise<Tokens> {
    
    this.mailService.sendWelcomeEmail(user.email, user.name);
    return this.issueTokens({
      id: user.id,
      name: user.name,
      email: user.email,
      isEmailVerified: user.isEmailVerified
    });
  }

  async refresh(refreshToken: string): Promise<Tokens> {
    // 1) JWT prüfen und sub extrahieren
    let payload: RefreshPayload;
    try {
      payload = await this.jwtService.verifyAsync<RefreshPayload>(refreshToken, {
        secret: this.configService.get<string>('REFRESH_JWT_SECRET') ?? this.configService.get<string>('JWT_SECRET')!,
      });
    } catch {
      throw new BadRequestException('Invalid or expired refresh token');
    }
    if (payload.type !== 'refresh' || !payload.sub) {
      throw new BadRequestException('Invalid token type');
    }

    // 2) User laden
    const user = await this.userService.findOne(payload.sub);
    if (!user) throw new NotFoundException('User not found');

    // 3) Refresh Token aus Redis abrufen und vergleichen
    const storedRefreshToken = await this.redisService.getRefreshToken(payload.sub);
    if (!storedRefreshToken) throw new ForbiddenException('No active session');
    
    if (storedRefreshToken !== refreshToken) {
      throw new ForbiddenException('Invalid refresh token');
    }

    // 4) Neue Tokens ausstellen und Refresh Token in Redis aktualisieren
    return this.issueTokens({
      id: user.id,
      name: user.name,
      email: user.email,
      isEmailVerified: user.isEmailVerified,
    });
  }

  async logout(userId: string): Promise<{ status: true , message: string }> {
    // Refresh Token aus Redis löschen
    await this.redisService.deleteRefreshToken(userId);
    return { status: true  , message: 'Logged out successfully' };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) return null;
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return null;

    if (!user.isEmailVerified) {
      throw new ForbiddenException('Email not verified');
    } 
    const { password: _p, ...safe } = user;
    return safe;
  }

  async verifyEmail(token: string) {
    const secret = this.configService.get<string>('EMAIL_VERIFY_SECRET') ?? this.configService.get<string>('JWT_SECRET') ;
    let payload: EmailVerifyPayloadTypes;
    try {
      payload = await this.jwtService.verifyAsync(token, { secret });
      
    } catch (error) {
      throw new BadRequestException('Invalid or expired token');
    }
    if (payload?.type !== 'email-verify' || !payload?.sub) throw new NotFoundException('Invalid token');

    const user = await this.userService.findOne(payload.sub);

    if (!user) throw new NotFoundException('User not found');

    if (user.isEmailVerified) return {message: 'Email already verified'};

    await this.userService.update(payload.sub, {isEmailVerified: true});

    return {message: 'Email verified successfully'};
  }

  async getProfile(id: string) {
        const user = await this.userService.findOne(id);
        if (!user) {
            throw new NotFoundException('User not found.');
        }
        return user;
    }
    
  private async signAccessToken(payload: JWTPayloadTypes) : Promise<string> {
    return this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: this.configService.get<string>('JWT_EXPIRES_IN') ?? '30m',
    });
  }

  private async signRefreshToken(userId: string): Promise<string> {
    const payload: RefreshPayload = { sub: userId, type: 'refresh' };
    
    return this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('REFRESH_JWT_SECRET') ?? this.configService.get<string>('JWT_SECRET')!,
      expiresIn: this.configService.get<string>('REFRESH_EXPIRES_IN') ?? '2d',
    });
  }

  private async issueTokens(user: { id: string; name: string; email: string; isEmailVerified: boolean }): Promise<Tokens> {
    const access = await this.signAccessToken({
      sub: user.id,
      name: user.name,
      email: user.email,
      isEmailVerified: user.isEmailVerified,
    });
    const refresh = await this.signRefreshToken(user.id);
    
    // Refresh Token in Redis speichern (TTL: 7 Tage)
    const refreshTokenTTL = 7 * 24 * 60 * 60; // 7 Tage in Sekunden
    await this.redisService.setRefreshToken(user.id, refresh, refreshTokenTTL);
    
    return { access_token: access, refresh_token: refresh };
  }

  private async signEmailVerifyToken(userId: string) : Promise<EmailVerifyTokenType> {
    const payload: EmailVerifyPayloadTypes = { sub: userId, type: 'email-verify' };
    return {emailVerifyToken: await this.jwtService.signAsync(payload, { 
      secret: this.configService.get<string>('EMAIL_VERIFY_SECRET') ?? this.configService.get<string>('JWT_SECRET'),
      expiresIn: this.configService.get<string>('EMAIL_VERIFY_EXPIRES_IN') ?? '1h'
    }) }
  }

    
}
