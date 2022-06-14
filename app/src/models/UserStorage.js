"use strict"

const fs = require("fs").promises;

// 이용자 데이터베이스
class UserStorage {

    // getUserInfo의 데이터 처리 부분
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    
    // 데이터 필드 제공 메서드
    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {newUsers[field] = users[field];}
            return newUsers;
        }, {});
        return newUsers;
    }

    // 특정 유저 데이터 제공 메서드
    static getUserInfo(id) {
        return fs.readFile("./src/databases/users.json")
        .then((data) => { return this.#getUserInfo(data, id); })
        .catch(console.error);
    }
    

    // 신규 데이터 저장 메서드
    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);

        return { success: true };
    }
}


module.exports = UserStorage;