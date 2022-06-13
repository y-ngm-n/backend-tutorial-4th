"use strict"

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const btn = document.querySelector("button");


btn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pw: pw.value,
    };
    console.log(req);
}