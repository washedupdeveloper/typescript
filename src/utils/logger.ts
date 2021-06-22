import pino from "pino";

const prettyPrintConfig = {
	colorize: true,
	translateTime: "SYS:yyyy-mm-dd HH:MM:ss",
	ignore: "pid,hostname",
};

export const logger = pino({
	name: process.env["npm_package_name"],
	prettyPrint: prettyPrintConfig,
});
