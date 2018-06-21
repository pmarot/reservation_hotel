// initialisation du server
const express = require('express');
const app = express();
var port = 3013;


app.use(express.static('static'));

// afficher l'index

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html')
});

app.get('/get_clients', function(req,res){
   
    // mongodb vers clients

});

app.get('/get_hotels', function(req,res){
   
    // mongodb vers hotels

});

app.get('/get_secteurs', function(req,res){
   
    // mongodb vers secteurs

});

// port d'écoute du serveur

app.listen(port, function(){
    console.log('the port is on')
})