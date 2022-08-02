const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/booksDb');
const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    bookId : Number,
    bookName : String,
    bookCode : String,
    releaseDate : String,
    description : String,
    price : Number,
    starRating :Number,
    
});

var booksData = mongoose.model('books', NewBookSchema);    //UserData is the model and NewBookData is the schema

module.exports = booksData;