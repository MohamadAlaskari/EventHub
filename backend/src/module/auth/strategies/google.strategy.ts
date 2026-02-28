import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../../user/user.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {
    const callbackURL = configService.get<string>('GOOGLE_CALLBACK_URL');
    if (!callbackURL) {
      throw new Error(
        'GOOGLE_CALLBACK_URL is not configured. Please set it to the exact OAuth callback URL configured in Google Cloud Console.',
      );
    }

    super({
      clientID: configService.get<string>('GOOGLE_CLIENT_ID') ?? '',
      clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET') ?? '',
      callbackURL,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { id, displayName, emails } = profile;
    const email = emails?.[0]?.value;

    const user = await this.userService.findOrCreateGoogleUser({
      googleId: id,
      email,
      name: displayName,
    });

    done(null, user);
  }
}
