import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from './entities/user.entity';
import {Repository} from 'typeorm';
import * as argon2 from 'argon2';
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService
    ) {}

    async create(createUserDto: CreateUserDto){
        const loginUser = await this.userRepository.findOne({
            where: [{login: createUserDto.login}, {email: createUserDto.email}]
        });

        const emailUser = await this.userRepository.findOne({
            where: {login: createUserDto.login}
        });

        if (loginUser)
            throw new BadRequestException('The login is already exist!')

        if (emailUser)
            throw new BadRequestException('The email is already exist!')

        const user = await this.userRepository.save({
            ...createUserDto,
            password: await argon2.hash(createUserDto.password)
        })

        return {userID: user.id};
    }

    async findOne(login: string){
        const user = await this.userRepository.findOne({
            where: {login}
        });

        if (!user)
            throw new NotFoundException('The user is not found!')

        return user
    }
}
