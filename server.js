// initialisation du server
const express = require('express');
const app = express();
var port = 3012;
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

app.use(express.static('static'));

// utilisation du moteur de rendu ejs
app.set('view engine', 'ejs');


app.get('/template', function (req, res) {
    var test = "hello world";
    res.render('index', {
        message: test
    });
});

//afficher l'index
app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html')
});


// connexion a bdd


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
    console.log("Connected successfully to bdd");
    db.close();
});

app.listen(port, function(){
    console.log('the port is on')
});
