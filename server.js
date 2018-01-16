const express = require('express')
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express()

const Category = require('./models/Category.js');

mongoose.Promise = Promise;

const categories  =[
    {name:'React'},
    {name:'Angular'}
]

// middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', function (req, res) {
    res.send('Got a POST request')
  })

// get categories 
app.get('/categories', async (req, res) => {
    try{
         const categories = await Category.find({}, '-__v')
         res.send(categories);
     }catch(e){
         console.log(e)
         res.sendStatus(500)
     }
})

// post to categories
app.post('/categories', (req,res)=>{
    
    const category= new Category({name:req.body.name})
    category.save((err, result) =>{
        if(err){
            console.error("posting category error")
            return res.status(500).send({massage:"posting category error"})
        }     
        res.sendStatus(200)     
    })
})


  mongoose.connect('mongodb://test:test@ds259117.mlab.com:59117/collab_db',(err) =>{
    if(!err){
        console.log('Connected to Mongo')
    }
});

app.listen(3000, () => console.log('collab app ws listening on port 3000!'))