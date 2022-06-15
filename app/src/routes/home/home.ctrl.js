"use strict"

const User = require("../../models/User");
const logger = require("../../config/logger");

// 렌더링
const view = {
    root: (req, res) => {
        logger.info('GET / 200 "홈 화면으로 이동"');
        res.render("home/root");
    },

    login: (req, res) => {
        logger.info('GET /login 200 "로그인 화면으로 이동"');
        res.render("home/login");
    },

    register: (req, res) => {
        logger.info('GET /register 200 "회원가입 화면으로 이동"');
        res.render("home/register");
    },
};

// 로그인 처리
const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        const url = {
            method: "POST",
            path: "/login",
            status: response.err ? 400:200,
        };
        log(response, url);
        return res.status(url.status).json(response);
    },

    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        const url = {
            method: "POST",
            path: "/register",
            status: response.err ? 409:201,
        };
        log(response, url);
        return res.status(url.status).json(response);
    },
};

module.exports = { view, process };

// 로깅 함수
const log = (response, url) => {
    if (response.err) {
        logger.error(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`
        );
    } else {
        logger.info(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.msg || ""}`
        );
    }
}