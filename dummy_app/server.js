const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var cdir = `${__dirname}/`;
var shit_to_print = {};
var usermsg;
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine','ejs');
app.use(express.static(__dirname));
app.get('/',(req,res)=>{
    res.end('type your name in url.')
});
app.get('/:useradd',(req,res)=>{
    if (req.params.useradd!='favicon.ico' && !(req.params.useradd in shit_to_print)){
        usermsg = req.params.useradd;
        shit_to_print[usermsg] = [];
    };
    console.log(shit_to_print);
    res.render('index',{'shittoprint' : shit_to_print[usermsg]});
});
app.post('/msgadd',(req,res)=>{
    console.log(req.body.msgbox01);
    shit_to_print[usermsg].push(req.body.msgbox01);
    res.redirect(usermsg);
});
app.get('showmemsg',(req,res)=>{
    res.send(shit_to_print);
});
app.listen(8080)