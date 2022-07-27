const express=require('express');

require('dotenv').config();
const app=express();
const port=process.env.PORT || 3003;

app.get('/',(req,res)=>{
    res.send('<h1>99 Bottles of Tea on the Wall</h1> <h2>99 Bottles of Tea<h2>  <a href= http://localhost:3000/98>Take one down, pass it around. 98 Bottles of Tea on the wall</a> ')
});

app.get('/:number_of_bottles',(req,res)=>{

    if(parseInt(req.params.number_of_bottles)===0){
        res.send(`<h1>No more bottles of Tea on the wall </h1> <h2>No more bottles of Tea.</h2> <h3>Go to the store and buy some more, 99 bottles of Tea on the Wall.<h3> <a href=http://localhost:3000/ >Start Over</a>`);
    }
    else{
        let oneLess=(parseInt(req.params.number_of_bottles)-1).toString();
        res.send(`<h1>${req.params.number_of_bottles} Bottles of Tea on the Wall </h1> <h2>${req.params.number_of_bottles} Bottles of Tea<h2>  <a href= http://localhost:3000/${oneLess}>Take one down, pass it around. ${oneLess} Bottles of Tea on the Wall. </a>  `)
    }
  })

app.listen(port,()=>{
    console.log('Listening on port ',port);
})