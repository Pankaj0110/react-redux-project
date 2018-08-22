var express = require('express');
var path = require('path')
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var bodyparser = require('body-parser');


var url = 'mongodb://localhost:27017'

//middleware applevel

app.use(express.static('/client/public'));
app.use(bodyparser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

    /**
     * getting all the products available on page load
     */
    app.get("/products", function(req, res, next){
        MongoClient.connect(url, function(err, client){
            assert.equal(null, err)
            console.log("Successfully connected to MongoDB.");
            var resultArray = []; 
        var db = client.db('ekart');
            var cursor = db.collection('products').find({});
            cursor.forEach(function(doc, err){
                assert.equal(null, err);
                console.log(doc)
                resultArray.push(doc);
            },
            function(){
                client.close();
                console.log(resultArray)  
                res.json({products:resultArray}); 
            })
        })
    });

    /**
     * Adding new user
     */
    app.post('/signup', function(req, res, next){
        MongoClient.connect(url, function(err, client){
            assert.equal(null, err)
            console.log("Successfully connected to MongoDB.");
         var db = client.db('ekart');
         var cursor = db.collection('users').insertOne({'name':req.body.name, 'emailid':req.body.mail,'phonenumber':req.body.number, 'password':req.body.pwd}, function(err, response){
             assert.equal(err, null);
             console.log('user has added');
         });
     })
    });

    /**
     * Login user
     * returns username
     */
    app.post('/login', function(req, res, next){
        MongoClient.connect(url, function(err, client){
            assert.equal(null, err)
            console.log("Successfully connected to MongoDB.");
            var username = "";
            var db = client.db('ekart');
       // console.log(req)
        console.log(req.body.name , req.body.pwd)
        var cursor = db.collection('users').find({"name":req.body.name,"password":req.body.pwd});
        cursor.forEach(function(doc, err){
            assert.equal(null, err);
            console.log(doc.name)
            username = doc.name;
        },
        function(){
            client.close();
            console.log('logged user is :: ', username)
            res.json({user:username}); 
        })

     })
    });


    app.get('/productdetails/:id', function(req, res, next){
        MongoClient.connect(url, function(err, client){
            assert.equal(null, err)
            console.log("Successfully connected to MongoDB.");
            var productdetails = {};
            var db = client.db('ekart');
            console.log("param id->" ,req.params.id)
            var cursor = db.collection('products').find({'_id':req.params.id});
            cursor.forEach(function(doc, err){
                assert.equal(null, err);
                console.log(doc)
                productdetails = doc;
            },
            function(){
                client.close();
                console.log(productdetails)  
                res.json({productdetails}); 
            })
    })
})

app.listen(4000, ()=>{ console.log('server is running at port 4000')})   