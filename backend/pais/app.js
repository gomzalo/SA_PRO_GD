const express = require('express')
const app = express()
const path = require("path")
const con = require("./config/database.js")
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config/init')

// connecting route to database
app.use(function(req, res, next) {
    req.con = con
    next()
})

con.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected to DB!");
})

// parsing body request
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors())
// app.use(methodOverride("_method"))

//  Rutas
const user_routes = require('./api/routes/pais_route')
// Routing
app.use('/country/', user_routes)

module.exports = app