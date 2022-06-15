"use strict"

const express = require('express');
const bodyParser = require("body-parser");
const home = require("./src/routes/home/index"); // 라우팅
const dotenv = require("dotenv"); // 환경변수

const app = express();
dotenv.config();


// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들웨어
app.use(express.static(`${__dirname}/src/public`)); // 정적경로 추가
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home);

module.exports = app;