const express = require('express');
const booksData = require('./src/model/booksdata');
const User = require('./src/model/user');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json());
username='admin';
password='1234';


function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

app.post('/insert',verifyToken,function(req,res){
   
    console.log(req.bookss);
   
    var bookss = {       
        bookId : req.body.bookss.bookId,
        bookName : req.body.bookss.bookName,
        bookCode : req.body.bookss.bookCode,
        releaseDate : req.body.bookss.releaseDate,
        description : req.body.bookss.description,
        price :req.body.bookss.price,
       
      
   }       
   var bookss = new booksData(bookss);
   bookss.save();
});
app.get('/bookss',function(req,res){
    
    booksData.find()
                .then(function(bookss){
                    res.send(bookss);
                });
});
app.get('/:id',  (req, res) => {
  
  const id = req.params.id;
    booksData.findOne({"_id":id})
    .then((bookss)=>{
        res.send(bookss);
    });
})

app.post('/login', (req, res) => {
    let userData = req.body
    
      
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })

    app.put('/update',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      bookId = req.body.books.bookId,
      bookName = req.body.books.bookName,
      bookCode = req.body.books.bookCode,
      releaseDate = req.body.books.releaseDate,
      description = req.body.books.description,
      price = req.body.books.price,
      

     booksData.findByIdAndUpdate({"_id":id},
                                  {$set:{"bookId" : bookId,
                                  "bookName" :bookName,
                                  "bookCode" :bookCode,
                                  "releaseDate" :releaseDate,
                                  "description" :description,
                                  "price" :price
                                  
                                }})
     .then(function(){
         res.send();
     })
   })
   
app.delete('/remove/:id',(req,res)=>{
   
     id = req.params.id;
     booksData.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('success')
         res.send();
     })
   })
     

app.listen(3000, function(){
    console.log('listening to port 3000');
});


