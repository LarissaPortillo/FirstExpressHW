const express=require('express');

require('dotenv').config();
const app=express();
const port=process.env.PORT || 3003;

//routes
//Greeting express application created.
app.get('/greeting',(req,res)=>{
    res.send('Hello, stranger')
})

app.get('/greeting/:name',(req,res)=>{
    res.send("What's up, "+req.params.name +'!');
})

app.listen(port,()=>{
    console.log('I am listening on ',port);
})