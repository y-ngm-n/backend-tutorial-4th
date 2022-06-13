"use strict"

const express = require('express');
const app = express();
const home = require("./src/routes/home/index"); // 라우팅


// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들웨어
app.use("/", home);
app.use(express.static(`${__dirname}/src/public`)); // 정적경로 추가


module.exports = app;