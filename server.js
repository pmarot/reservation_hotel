// initialisation du server
const express = require('express');
const app = express();
var port = 4013;


app.use(express.static('public'));

// afficher l'index

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html')
});

// connexion a bdd
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');


// Connection URL
var url = 'mongodb://localhost:27017/reservation';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db.close();
});

// port d'écoute du serveur

app.listen(port, function(){
    console.log('the port is on')
})