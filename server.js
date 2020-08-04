const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var nom = req.body.nom; 
    res.send("<h1>" + "Bonjour "+nom+"</h1>");
});

exports.saisie = function(nom){
    console.log(nom);
    var msg = "Le nom saisi est : " + nom;
    return msg;
    };

app.listen(3000, function(){
    console.log("Server Started at port 3000");
});