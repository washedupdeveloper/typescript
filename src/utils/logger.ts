import pino from "pino";

export const logger = pino({
	name: process.env["npm_package_name"],
	prettyPrint: {
		colorize: true,
		translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
		ignore: "pid,hostname",
	},
});
