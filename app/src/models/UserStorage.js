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

    // getUsers의 데이터 처리 부분
    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {newUsers[field] = users[field];}
            return newUsers;
        }, {});
        return newUsers;
    }

    // 데이터 필드 제공 메서드
    static getUsers(isAll, ...fields) {
        return fs.readFile("./src/databases/users.json")
        .then((data) => { return this.#getUsers(data, isAll, fields); })
        .catch(console.error);
    }

    // 특정 유저 데이터 제공 메서드
    static getUserInfo(id) {
        return fs.readFile("./src/databases/users.json")
        .then((data) => { return this.#getUserInfo(data, id); })
        .catch(console.error);
    }
    

    // 신규 데이터 저장 메서드
    static async save(userInfo) {
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)) {
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.pw.push(userInfo.pw);
        users.name.push(userInfo.name);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true };
    }
}


module.exports = UserStorage;