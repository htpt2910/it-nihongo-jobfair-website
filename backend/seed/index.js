const mysql = require("mysql2")
const fs = require("fs")


const seedQuery = fs.readFileSync("seed/seeding.sql", {
    encoding: "utf-8",
})

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "itnihongo",
    multipleStatements: true,
})

connection.connect()

connection.query(seedQuery, err => {
    if (err) {
        throw err
    }
    console.log("SEED COMPLETE!!")
    connection.end()
})