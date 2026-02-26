import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

 
  async create(createUserDto: CreateUserDto) {
     
      // Hash password before saving to database using bcrypt 
      const hashedPassword = createUserDto.password
        ? await this.hashPassword(createUserDto.password)
        : undefined;
      
      // Create new user with hashed password
      const user = this.userRepository.create({ ...createUserDto, password: hashedPassword });
    
      // Save user to database
      return this.userRepository.save(user);
  }

  async findOrCreateGoogleUser(googleProfile: {
    googleId: string;
    email: string;
    name: string;
  }): Promise<User> {
    // Try to find by googleId first
    let user = await this.userRepository.findOne({ where: { googleId: googleProfile.googleId } });
    if (user) return user;

    // Try to find by email (account linking)
    user = await this.userRepository.findOne({ where: { email: googleProfile.email } });
    if (user) {
      // Link the Google account
      await this.userRepository.update(user.id, { googleId: googleProfile.googleId });
      const linked = await this.userRepository.findOne({ where: { id: user.id } });
      if (!linked) throw new Error('Failed to link Google account');
      return linked;
    }

    // Create a new user
    const newUser = this.userRepository.create({
      googleId: googleProfile.googleId,
      email: googleProfile.email,
      name: googleProfile.name,
      isEmailVerified: true,
    });
    return this.userRepository.save(newUser);
  }

  // Hash password using bcrypt
  private async hashPassword(password: string) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }


  async findOne(id: string) {
     const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');

    }
   const { password: _p , ...safe } = user;
    return safe;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (updateUserDto.password) {
      updateUserDto.password = await this.hashPassword(updateUserDto.password);
    }
    await this.userRepository.update(id, updateUserDto);

    const updatedUser = await this.userRepository.findOne({ where: { id } });
    const { password, ...safeUser } = updatedUser!;
    return safeUser;
  }
    

  async remove(id: string) {
    const removeduser = await this.userRepository.delete(id);
    if(removeduser.affected === 0) throw new NotFoundException('User not found');
    
    return {message: 'User deleted successfully'};
  }


  async findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
}
