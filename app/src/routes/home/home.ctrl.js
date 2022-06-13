"use strict"

// 렌더링
const view = {
    root: (req, res) => { res.render("home/root"); },
    login: (req, res) => { res.render("home/login"); },
};

// 로그인 처리
const process = {
    login: (req, res) => {
        console.log(req.body);
    }
};

module.exports = { view, process };