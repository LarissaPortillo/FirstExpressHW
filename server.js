const express=require('express');

require('dotenv').config();
const app=express();
const port=process.env.PORT || 3003;

//routes
//Greeting
//http://localhost:3000/greeting
app.get('/greeting',(req,res)=>{
    res.send('Hello, stranger')
});

//http://localhost:3000/greeting/Larissa
app.get('/greeting/:name',(req,res)=>{
    res.send("Oh, what a lovely name! Nice to meet you, "+req.params.name +'.');
});

//Tip Calculator 
//http://localhost:3000/tip/100/20
app.get('/tip/:total/:tipPercentage',(req,res)=>{
    let tip=parseInt(req.params.total)*(parseInt(req.params.tipPercentage)/100);
    res.send(tip.toString());
});

//Magic 8 Ball 
//our data
const magic8= require('./models/magic8');
//http://localhost:3000/magic/Will%20I%20Be%20A%20Millionaire
app.get('/magic/:question',(req,res)=>{
    let rnd=magic8[Math.floor(Math.random()*magic8.length)]
    res.send(`${req.params.question}? <h1> ${rnd} </h1>`);
});

//Finonacci
//http://localhost:3000/fibonacci/8
//http://localhost:3000/fibonacci/4
app.get('/fibonacci/:num',(req,res)=>{
    let n=0;
    let nthTerm=0; 
    let input=parseInt(req.params.num);
    while(input>nthTerm && input>0){
        nthTerm=Math.floor(((((1+Math.sqrt(5))/2)**n)-(((1-Math.sqrt(5))/2)**n))/Math.sqrt(5));
        n++;
    }
    if(input===nthTerm){
       res.send(req.params.num+': Very good. It is Fibonacci.');
    }
    else{
        res.send(req.params.num+': I can tell this is not a fibonacci number.');
    } 
});

app.listen(port,()=>{
    console.log('I am listening on ',port);
})