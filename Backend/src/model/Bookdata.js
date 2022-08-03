const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/booksDb');
const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    bookId : Number,
    bookName : String,
    authorName : String,
    bookCode : String,
    releaseDate : String,
    type : String,
    price : Number
    // imageUrl:String
    
});

var bookdata = mongoose.model('bookss', NewBookSchema);    //UserData is the model and NewBookData is the schema

module.exports = bookdata;