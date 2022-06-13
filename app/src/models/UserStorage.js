"use strict"

class UserStorage {

    static #users = {
        id: ["y__ngm_n", "song", "young"],
        pw: ["123", "123", "1234"],
        name: ["앙민", "송", "앙"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {newUsers[field] = users[field];}
            return newUsers;
        }, {});
        return newUsers;
    }
}


module.exports = UserStorage;