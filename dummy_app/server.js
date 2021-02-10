const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var cdir = `${__dirname}/`;
var shit_to_print = {};
var usermsg;
var adminpsswd = 'S4m_S3pi0l';
var pswrdshow = false;
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine','ejs');
app.use(express.static(__dirname));
app.get('/',(req,res)=>{
    res.end('type your name in url.');
});
app.get('/showmemsg',(req,res)=>{
    if (pswrdshow){
        res.send(shit_to_print);
        pswrdshow = false;
    }else{
        res.render(`pschk`);
    };
});
app.get('/:useradd',(req,res)=>{
    if (req.params.useradd!='favicon.ico' && !(req.params.useradd in shit_to_print)){
        shit_to_print[req.params.useradd] = [];
    };
    res.render('index',{'shittoprint' : shit_to_print[req.params.useradd]});
});
app.post('/msgadd',(req,res)=>{
    usermsg = req.body.name01;
    shit_to_print[usermsg].push(req.body.msgbox01);
    res.redirect(usermsg);
});
app.post('/pschck',(req,res)=>{
    if (req.body.pschk01 == adminpsswd){
        pswrdshow = true;
        res.redirect('showmemsg');
    }else{
        res.end('wrong password!');
    };
});
app.listen(3000);