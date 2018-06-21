// initialisation du server
const express = require('express');
const app = express();
var port = 4013;


app.use(express.static('static'));

// afficher l'index

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html')
});


// connexion a bdd
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

app.get('/get_clients', function(req,res){
   
    // mongodb vers clients


});

app.get('/get_hotels', function(req,res){
   
    // mongodb vers hotels

});

app.get('/get_secteurs', function(req,res){
   
    // mongodb vers secteurs

});

// Connection URL
var url = 'mongodb://localhost:27017/reservation';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db.close();
});

