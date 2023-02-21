"use strict";

var express = require('express');
var app = express();
require('dotenv').config();
var port = process.env.Port || 4000;
app.listen(port, function () {
  console.log("Server is running on port ".concat(port));
});