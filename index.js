const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.set("port", process.env.PORT || 3000);

const booksController = require("./controllers/booksController")
const indexController = require("./controllers/indexController")
const mainController = require("./controllers/mainController")
const OneBookController = require("./controllers/onebookController")

app.use(express.static('public'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.get('/', indexController.get)
app.get('/home', indexController.get)
app.get('/admin', mainController.get)

app.get('/booksList', booksController.get)
app.get('/books/:ID', OneBookController.get)

app.get('/addnewbook', mainController.new)
app.post('/addnewbook', mainController.addnew)
app.get('/delete/:ID', mainController.delete)

app.get('/honesty', (req, res) => {
    res.render('honesty');
    console.log(req, res)
})

app.get('*', function(req, res){
    console.log(req, res)
    res.status(404).render('404');
  });

app.listen(app.get("port"),  () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
  });

let uri = 'mongodb+srv://artieeitra:dbpassword@was500.i0yuzwi.mongodb.net/Books?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('Successfully connected to MongoDB using Mongoose!')
    }
})