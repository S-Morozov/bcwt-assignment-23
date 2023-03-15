'use strict';

const express = require('express')
const {render} = require("pug");
const app = express()
const port = 3000
app.use(express.static('public'))


app.set('view engine', 'pug');


app.get('/', (req, res)=> {
   res.render('index')
});


app.get("/catinfo", (req, res) => {
    const cat = {
        name: "Frank",
        birthdate: "2010-12-25",
        weight: 5,
    };
    res.json(cat);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});