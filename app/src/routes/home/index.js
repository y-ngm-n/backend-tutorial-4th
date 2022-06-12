"use strict"

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

// 라우팅
router.get('/', ctrl.root);
router.get('/login', ctrl.login);


module.exports = router;