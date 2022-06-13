"use strict"


// 이용자 데이터베이스
class UserStorage {

    // 실제 데이터 (은닉)
    static #users = {
        id: ["y__ngm_n", "song", "young"],
        pw: ["123", "123", "1234"],
        name: ["앙민", "송", "앙"],
    };

    // 데이터 필드 제공 메서드
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {newUsers[field] = users[field];}
            return newUsers;
        }, {});
        return newUsers;
    }

    // 특정 유저 데이터 제공 메서드
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    // 신규 데이터 저장 메서드
    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);

        return { success: true };
    }
}


module.exports = UserStorage;