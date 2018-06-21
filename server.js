// initialisation du server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var port = 4013;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('static'));

// afficher l'index

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});


// connexion a bdd
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

app.get('/get_clients', function (req, res) {

    // mongodb vers clients


});

app.get('/get_hotels', function (req, res) {

    // mongodb vers hotels

});

app.get('/get_secteurs', function (req, res) {

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

app.get('/admin/ajout-hotel', function (req, res) {
    res.sendFile(__dirname + '/ajout-hotel.html')
});


// A REVOIR - ne récupère pas les données dans newvalues

app.put('/update', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("reservation");

        var monid = req.body.donnee1;
        var name = req.body.donnee2;
        var image = req.body.donnee3;
        var mark = req.body.donnee4;
        var secteur = req.body.donnee5;


        var myquery = { id: monid };
        var newvalues = { $set: { Nom: name, img: image, id_secteur: secteur, Nb_etoiles: mark } };
        console.log(newvalues);
        dbo.collection("hotels").updateOne(myquery, newvalues, function (err, result) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close()

        });
    });
});

app.listen(4013);