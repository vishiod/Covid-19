const fs = require('fs');
const path = require('path');
var bodyParser = require("body-parser");
var MongoClient = require('mongodb').MongoClient;


var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/submit-student-data', function(req, res) {

  console.log(req.body.email);

  console.log("Hi I am Neal Caffrey");

  response = {
    Email: req.body.email,
    Password: req.body.pass,
    Fname: req.body.fname,
    lastName: req.body.lname,
    Phone: req.body.phone,
    Address: req.body.address
  };

  MongoClient.connect('mongodb://localhost:27017/', function(err, db) {
    if (err) throw err;
    console.log("Connected to Database");
    var dbo = db.db("minato_db");
    dbo.collection("student").insert(response, (err, result) => {
      if (err) throw err;
      console.log("1 document inserted");
      console.log(response);
      res.end(JSON.stringify(response));
    });
  });

});
// });

var server = app.listen(8000, function() {
  console.log('Node server is running.. at  http://localhost:8000/');
});
