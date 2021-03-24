const EventEmitter = require("events").EventEmitter;
const eventEmitter = new EventEmitter;
const log4js = require("log4js");
log4js.configure({
    appenders: { logs: { type: "file", filename: "logs/logs.log" } },
    categories: { default: { appenders: ["logs"], level: "error" } }
});
 
const logger = log4js.getLogger("logs");

eventEmitter.on("error", (error)=>{
    logger.error(error);
});

exports.eventEmitter = eventEmitter;