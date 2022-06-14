"use strict"

const { createLogger, transports, format } = require("winston");
const { combine, colorize, timestamp, json, printf, label } = format;

// 로그 출력포맷
const printFormat = printf(({ label, timestamp, level, message }) => {
    return `[${label}] ${timestamp} ${level} : "${message}"`;
});

// 로그 포맷
const printLogFormat = combine(
    label({
        label: "백엔드 맛보기"
    }),
    colorize(),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    printFormat
);

// 로그 메인
const logger = createLogger({
    transports: [
        new transports.Console({
            level: "info",
            format: printLogFormat,
        })
    ],
});

module.exports = logger;