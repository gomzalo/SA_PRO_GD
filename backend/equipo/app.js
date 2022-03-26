const express = require('express')
const app = express()
const con = require("./config/database.js")
const cors = require('cors')
const bodyParser = require('body-parser')

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

//app.use(config.cors)
app.use(cors())

//  Rutas
const team_routes = require('./api/routes/team_route')
// Routing
app.use('/', team_routes)

module.exports = app