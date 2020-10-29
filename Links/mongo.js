const fs = require('fs');
const path = require('path');
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: true });


var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){

    var options = {
        root: path.join('../Links')
    };

    var fileName = 'login.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            throw err;
        } else {
            console.log('Sent:', fileName);

        }
    });

    console.info("Hi, I am Nick Halden...");
});

app.get('/', function(req, res){
    console.log("File Sent")
    res.send();
});

var firstname, lastName, id;

app.post('/submit-student-data', function(req, res) {

  var customer = req.body;
  var newCustomer = JSON.stringify(req.body);
  console.log(req.body["email"]);
  console.log(req.body["fname"]);
  console.log(req.body["lname"]);
  console.log(req.body["phone"]);
  console.log(req.body["lname"]);

  res.end("Post Successfully: \n" + JSON.stringify(customer, null, 4));
  console.log("Hi I am Neal Caffrey");
  fs.appendFile('5.json', newCustomer, function() {
    console.log('done')
  });
});

var server = app.listen(8000, function() {
  console.log('Node server is running.. at  http://localhost:8000/');
});
