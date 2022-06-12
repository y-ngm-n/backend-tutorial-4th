"use strict"

const express = require('express');
const app = express();
const home = require("./routes/home/index"); // 라우팅


// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home);


module.exports = app;