var express = require("express");

var app = express();

var jwt = require("jsonwebtoken");

var bodyParser = require("body-parser");

var path = require("path");

app.use(bodyParser.json());

var cors = require("cors");

app.use(cors());

var chartsUrl = require("./routes/charts");

app.use("/",chartsUrl);

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, function() {
    console.log('Listening on port %d', server_port);
});











