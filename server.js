// initialisation du server
const express = require('express');
const app = express();
var port = 3013;


app.use(express.static('static'));

// afficher l'index

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html')
});


// connexion a bdd
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

app.get('/get_clients', function(req,res){

    //
    get_clients(function(clients){
        console.log(clients);
        res.send(clients);
    });

    //

});


function get_clients(cb){
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("reservation");
        dbo.collection("clients").find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            //res.send(result);
            cb(result);
            db.close();
        });
    });

}


app.get('/get_hotels', function(req,res){
   
    // mongodb vers hotels
    //
    get_hotels(function(hotels){
        console.log(hotels);
        res.send(hotels);
    });

    //
});

function get_hotels(cb){
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("reservation");
        dbo.collection("hotels").find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            //res.send(result);
            cb(result);
            db.close();
        });
    });

}

app.get('/get_secteurs', function(req,res){
   
    // mongodb vers secteurs
    //
    get_secteurs(function(secteurs){
        console.log(secteurs);
        res.send(secteurs);
    });
    //
});


function get_secteurs(cb){
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("reservation");
        dbo.collection("secteurs").find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            //res.send(result);
            cb(result);
            db.close();
        });
    });

}

// Connection URL
var url = 'mongodb://localhost:27017/reservation';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db.close();
});

app.listen(port, function(){
    console.log('on')
})