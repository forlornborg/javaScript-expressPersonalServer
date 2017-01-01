var serverData = require('./config');
var express = require('express');
var app = express();

app.use(express.static(serverData.toHost));

var server = app.listen(3001, function(){
    console.log("listening on: " + serverData.portToListen);
});