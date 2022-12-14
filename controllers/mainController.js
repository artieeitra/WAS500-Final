const Books = require('../models/books')
exports.get = (req, res) => {
    console.log(req, res)
    Books.find({}, function(err, data) {
        res.render('admin', {
            books: data
        })
    })
}
exports.new = (req, res) => {
    console.log(req, res)
    res.render('addnewbook')
}
exports.addnew = (req, res) => {
    console.log(req, res)
    var addBook = new Books()
    addBook.name = req.body.name,
    addBook.author = req.body.author
    addBook.save((err, doc) => {
        if(!err)
            res.redirect('/admin')
        else{
            console.log('Error:' + err)
        }
    })
}
exports.delete = (req, res) => {
    console.log(req, res)
    Books.remove({_id:req.params.ID})
    .then(result => {
        res.redirect('/admin')
    })
}