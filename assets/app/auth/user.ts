export class User{
    constructor(public email: string, public password: string, public confirmPassword?: string, public firstName?: string, public lastName?: string, public role?: number, public solutions?: Object){}
}