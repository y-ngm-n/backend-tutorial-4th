"use strict"

const User = require("../../models/User");
const logger = require("../../config/logger");

// 렌더링
const view = {
    root: (req, res) => {
        logger.info(`GET / 200 "홈 화면으로 이동`);
        res.render("home/root");
    },
    login: (req, res) => {
        logger.info(`GET /login 200 "로그인 화면으로 이동`);
        res.render("home/login");
    },
    register: (req, res) => {
        logger.info(`GET /register 200 "회원가입 화면으로 이동`);
        res.render("home/register");
    },
};

// 로그인 처리
const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        if (response.err) logger.error(
            `POST /login 200 Response: "success: ${response.success}, ${response.err}"`
        );
        else logger.info(
            `POST /login 200 Response: "success: ${response.success}, msg: ${response.msg}"`
        );
        return res.json(response);
    },

    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        if (response.err) logger.error(
            `POST /register 200 Response: "success: ${response.success}, ${response.err}"`
        );
        else logger.info(
            `POST /register 200 Response: "success: ${response.success}, msg: ${response.msg}"`
        );
        return res.json(response);
    },
};

module.exports = { view, process };