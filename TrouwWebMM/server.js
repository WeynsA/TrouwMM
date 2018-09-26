const express = require('express');
const path = require('path');
let mongo = require('mongodb');


const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const bodyParser = require('body-parser');


let mongoClient = mongo.MongoClient();

var db;
mongoClient.connect('mongodb://localhost:27017/register', function (err, _db) {

    if(err)
    {
        console.log("Error connecting to Mongo:" + err);
        throw err;
    }
    console.log("Connected to MongoDB");
    db = _db;
}) 

app.use(bodyParser.json());  

let apiRegister = express.Router();

app.use('/api/register/resterend', apiRegister);

apiRegister
  .get('/', (req, res) => {
    var query = req.query;
    db.collection('resterend').find(query).toArray(function (err, result) { 
        res.json(result)
    })
  })
  .put('/', (req, res) => {
    db.collection('resterend').insert(req.body, (err, result) => {
        res.json(result.ops[0]);
    })
  })  
  .delete('/:id', (req, res) => {
    let id = req.params._id
    let query = {'_id' : ObjectId(id)}
    db.collection('resterend').deleteOne(query, (err, result) => {
        if (err)
        {
            res.json("Nope") 
        }
        res.json("OK");
    })
  })

  let apiGifts = express.Router();
  app.use('/api/register/verkocht' , apiGifts);

  apiGifts
  .get('/', (req, res) => {
    var query = req.query;
    db.collection('verkocht').find(query).toArray(function (err, result) { 
        res.json(result)
    })
  })
  .put('/', (req, res) => {
    db.collection('verkocht').insert(req.body, (err, result) => {
        res.json(result.ops[0]);
    })
  })  
  .delete('/:id', (req, res) => {
    let id = req.params._id
    let query = {'_id' : ObjectId(id)}
    db.collection('verkocht').deleteOne(query, (err, result) => {
        if (err)
        {
            res.json("Nope") 
        }
        res.json("OK");
    })
  })


app.listen(3000, () => { console.log("server is running") });