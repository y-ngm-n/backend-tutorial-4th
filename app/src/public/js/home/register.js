"use strict"

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pw = document.querySelector("#pw");
const pwConfirm = document.querySelector("#pw-confirm");
const btn = document.querySelector("#btn");

btn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        pw: pw.value,
        pwConfirm: pwConfirm.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) { location.href = "/login"; }
        else { alert(res.msg); }
    })
    .catch((err) => {console.error(new Error("회원가입 중 에러 발생"));})
};