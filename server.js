// initialisation du server
const express = require('express');
const app = express();
var port = 3012;


app.use(express.static('public'));

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



// port d'écoute du serveur

app.listen(port, function(){
    console.log('the port is on')
});