const express = require('express');
const ejs = require('ejs');
const app = express();
const bd = require('body-parser');

app.listen(80,function(err){})
app.use(bd.json())
app.use(bd.urlencoded({extended: false}))
app.set('view engine', 'ejs')

app.get("/", function(req,res){
	res.render('index',{qtde:0, option:'a'});
})
app.post('/', function(req,res){
	const qtde = req.body.valor;
	const option = req.body.option;
	res.status(200).send({qtde, option})
})