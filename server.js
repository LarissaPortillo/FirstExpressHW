const express=require('express');

require('dotenv').config();
const app=express();
const port=process.env.PORT || 3003;

//routes
//Greeting
app.get('/greeting',(req,res)=>{
    res.send('Hello, stranger')
})

app.get('/greeting/:name',(req,res)=>{
    res.send("Oh, what a lovely name! Nice to meet you, "+req.params.name +'.');
})

//Tip Calculator
app.get('/tip/:total/:tipPercentage',(req,res)=>{
    let tip=parseInt(req.params.total)*(parseInt(req.params.tipPercentage)/100);
    res.send(tip.toString());
})

app.listen(port,()=>{
    console.log('I am listening on ',port);
})