const mysql = require("mysql");
const logger = require("../../logger");

const query = (query) => {
    const connection = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "password",
        database: "sales",
    });
    return new Promise((resolve) => {
        connection.connect((error) => {
            if (error) {
                logger.eventEmitter.emit("error", JSON.stringify(error));
                resolve({ error: true });
            } else {
                connection.query(query, (error, rows, _fields) => {
                    if (!error) {
                        const result = Array.from(rows);
                        resolve({
                            data: result
                        });
                    } else {
                        logger.eventEmitter.emit("error", JSON.stringify(error));
                        resolve({ error: true });
                    }
                });
            }
            connection.end();
        });
    });
};

module.exports = query;