"use strict"

const root = (req, res) => {
    res.render("home/root");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = { root, login };