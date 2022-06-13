"use strict"

const User = require("../../models/User");

// 렌더링
const view = {
    root: (req, res) => { res.render("home/root"); },
    login: (req, res) => { res.render("home/login"); },
    register: (req, res) => { res.render("home/register"); },
};

// 로그인 처리
const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },

    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};

module.exports = { view, process };