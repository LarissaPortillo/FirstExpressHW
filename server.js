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
app.get('/magic/:question',(req,res)=>{
    let rnd=magic8[Math.floor(Math.random()*magic8.length)]
    res.send(`${req.params.question}? <h1> ${rnd} </h1>`);

})

app.listen(port,()=>{
    console.log('I am listening on ',port);
})