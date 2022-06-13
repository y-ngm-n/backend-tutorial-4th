"use strict"

const UserStorage = require("../../models/UserStorage");

// 렌더링
const view = {
    root: (req, res) => { res.render("home/root"); },
    login: (req, res) => { res.render("home/login"); },
};

// 로그인 처리
const process = {
    login: (req, res) => {
        const id = req.body.id;
        const pw = req.body.pw;

        const users = UserStorage.getUsers("id", "pw");

        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pw[idx]===pw) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "login failed";
        return res.json(response);
    }
};

module.exports = { view, process };