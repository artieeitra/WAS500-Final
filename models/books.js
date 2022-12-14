const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    name: String,
    author: String,
    description: String,
    year: String,
    ID: String,
    image: String
})
let Books = mongoose.model("books", BookSchema)
module.exports = Books