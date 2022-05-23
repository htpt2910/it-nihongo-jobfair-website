const sql = require("./db.js");

let getAllUser = () => {
    return new Promise((resolve, reject) => {
        sql.query('SELECT * FROM user', (error, results) => {
            if (error) {
                return reject(error);
            }

            console.log("list user:", JSON.stringify(results))

            return resolve(results);
        });
    });
};


module.exports = {
    getAllUser
}