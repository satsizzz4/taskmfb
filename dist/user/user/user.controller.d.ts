import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signUp(email: string, password: string): Promise<import("./user").User>;
    signIn(email: string, password: string): Promise<import("./user").User>;
}
