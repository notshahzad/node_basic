const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var cdir = `${__dirname}/`
var shit_to_print = []
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine','ejs');
app.use(express.static(__dirname));
app.get('/',(req,res)=>{
    res.render('index',{'name' : shit_to_print});
});
app.post('/render',(req,res)=>{
    shit_to_print.push(req.body.name01);
    res.render('index',{'name': shit_to_print});
});
app.listen(8080)