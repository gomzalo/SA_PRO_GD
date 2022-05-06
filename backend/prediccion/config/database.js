const mysql = require('mysql')
require("dotenv").config()

module.exports = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
    // sslmode : 'require'
})