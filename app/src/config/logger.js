"use strict"

const { createLogger, transports, format } = require("winston");
const { combine, colorize, timestamp, printf, label, simple } = format;

// 로그 출력포맷
const printFormat = printf(({ label, timestamp, level, message }) => {
    return `[${label}] ${timestamp} ${level} : "${message}"`;
});

// 로그 포맷
const printLogFormat = {
    file: combine(
        label({ label: "백엔드 맛보기" }),
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        printFormat
    ),
    console: combine(
        colorize(),
        simple()
    ),
}
    

const opts = {
    file: new transports.File({
        filename: "access.log",
        dirname: "./logs",
        level: "info",
        format: printLogFormat.file,
    }),
    console: new transports.Console({
        level: "info",
        format: printLogFormat.console,
    })
}

// 로그 메인
const logger = createLogger({
    transports: [opts.file],
});

if (process.env.NODE_ENV !== "production") {
    logger.add(opts.console);
}

logger.stream = {
    write: (message) => logger.info(message),
}

module.exports = logger;