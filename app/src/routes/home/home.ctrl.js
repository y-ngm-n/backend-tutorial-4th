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
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },

    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
};

module.exports = { view, process };