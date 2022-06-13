"use strict"

const UserStorage = require("./UserStorage");


// 유저 인스턴스
class User {
    constructor(body) { this.body = body; }

    // 로그인
    login() {
        const body = this.body;
        const { id, pw } = UserStorage.getUserInfo(body.id);
        if (id) {
            if (id===body.id && pw===body.pw) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다." };
        }
        return { success: false, msg: "존재하지 않는 아이디입니다." };
    }
}


module.exports = User;