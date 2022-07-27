const express=require('express');

require('dotenv').config();
const app=express();
const port=process.env.PORT || 3003;




//pass-it-around home page
app.get('/',(req,res)=>{
    res.send('<h1>99 Bottles of Tea on the Wall</h1> <h2>99 Bottles of Tea<h2>  <a href= http://localhost:3000/98>Take one down, pass it around. 98 Bottles of Tea on the wall</a> ')
});

//bug home page
app.get('/bug',(req,res)=>{
    let rnd=Math.floor(Math.random()*(128-99)+99)
    let arrBug=[98,98,98,rnd];
    let bugs=arrBug[Math.floor(Math.random()*arrBug.length)]
    res.send(`<h1> 99 little bugs in the code </h1> <h2>99 little bugs<h2>  <a href= http://localhost:3000/bug/${bugs}>Take one down, patch it around. ${bugs} bugs in the code</a> `)
});

app.get('/bug/:number_of_bugs',(req,res)=>{
    let paramBug=parseInt(req.params.number_of_bugs)-1
    let rnd=Math.floor(Math.random()*(128-paramBug)+paramBug)
    let arrBug=[paramBug,paramBug,paramBug,paramBug,rnd,paramBug];
    let bugs=arrBug[Math.floor(Math.random()*arrBug.length)]
    if(parseInt(req.params.number_of_bugs)===0){
        res.send(`<h1>No more little bugs in the code </h1> <h2>No more little bugs.</h2>  <a href=http://localhost:3000/bug >Start Over</a>`);
    }
    else{
        res.send(`<h1>${req.params.number_of_bugs} little bugs in the code </h1> <h2>${req.params.number_of_bugs} little bugs<h2>  <a href= http://localhost:3000/bug/${bugs}>Take one down, pass it around. ${bugs} bugs in the code. </a>  `)
    }
});

//pass-it-around # of bottles
app.get('/:number_of_bottles',(req,res)=>{
    if(parseInt(req.params.number_of_bottles)===0){
        res.send(`<h1>No more bottles of Tea on the wall </h1> <h2>No more bottles of Tea.</h2> <h3>Go to the store and buy some more, 99 bottles of Tea on the Wall.<h3> <a href=http://localhost:3000/ >Start Over</a>`);
    }
    else{
        let oneLess=(parseInt(req.params.number_of_bottles)-1).toString();
        res.send(`<h1>${req.params.number_of_bottles} Bottles of Tea on the Wall </h1> <h2>${req.params.number_of_bottles} Bottles of Tea<h2>  <a href= http://localhost:3000/${oneLess}>Take one down, pass it around. ${oneLess} Bottles of Tea on the Wall. </a>  `);
    }
});


app.listen(port,()=>{
    console.log('Listening on port ',port);
});