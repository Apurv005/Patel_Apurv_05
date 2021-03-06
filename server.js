const { response } = require("express");
const express  = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    res.send("Addition Is: "+ (num1+num2));
});


app.listen(3000,function(){
    console.log("Server Has Been Started At Port 3000");
});