"use strict"

const db = require("../config/db.js");

// 이용자 데이터베이스
class UserStorage {

    // 특정 유저 데이터 제공 메서드
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        })
    }
    
    // 신규 데이터 저장 메서드
    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, pw) VALUES(?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.pw], (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        })
    }
}


module.exports = UserStorage;