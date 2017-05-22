/*
var express = require('express');
var app = express();

app.use(function(req, res, next) {
    console.log(theDate, " visitor couldn't find the page with that path ", req.originalUrl, " IP of the visitor: ", req.ip);
    res.sendFile('front/404.html', {
        root: __dirname
    });

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
*/



var redis = require("redis"),
    client = redis.createClient({host: "192.168.56.102", port: "6666"});

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});

client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});
