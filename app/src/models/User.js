"use strict"

const UserStorage = require("./UserStorage");


// 유저 인스턴스
class User {
    constructor(body) { this.body = body; }

    // 로그인
    async login() {
        const client = this.body;
        try {
            const user = await UserStorage.getUserInfo(client.id);

            if (user) {
                if (user.id===client.id && user.pw===client.pw) {
                    return { success: true };
                }
                return { success: false, msg: "비밀번호가 틀렸습니다." };
            }
            return { success: false, msg: "존재하지 않는 아이디입니다." };
        } catch (err) {
            return { success: false, msg: err };
        }
    }

    // 회원가입
    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) { return { success: false, msg: err }; }
    }
}


module.exports = User;