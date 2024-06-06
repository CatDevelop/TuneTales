import {Injectable, UnauthorizedException} from '@nestjs/common';
import * as argon2 from 'argon2'
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {IUser} from "../types/types";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {
    }

    async validateUser(login: string, password: string) {
        try {
            const user = await this.userService.findOneByLogin(login);

            if (user && await argon2.verify(user.password, password)) {
                return user;
            }
        } catch {
            throw new UnauthorizedException("Login or password are incorrect!");
        }

        throw new UnauthorizedException("Login or password are incorrect!");
    }

    async login(user: IUser) {
        const {id, login, role} = user;
        return {
            id,
            login,
            role,
            accessToken: this.jwtService.sign({login, id, role}),
        };
    }
}
