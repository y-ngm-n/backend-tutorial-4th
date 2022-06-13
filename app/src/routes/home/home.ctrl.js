"use strict"

// 임시 데이터
const users = {
    id: ["y__ngm_n", "song", "young"],
    pw: ["123", "123", "1234"]
};


// 렌더링
const view = {
    root: (req, res) => { res.render("home/root"); },
    login: (req, res) => { res.render("home/login"); },
};

// 로그인 처리
const process = {
    login: (req, res) => {
        const id = req.body.id;
        const pw = req.body.pw;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pw[idx]===pw) {return res.json({
                success: true,
            });}
        }

        return res.json({
            success: false,
            msg: "login failed",
        });
    }
};

module.exports = { view, process };