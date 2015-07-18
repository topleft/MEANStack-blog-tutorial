var mongoose = require('mongoose');
var Comment = mongoose.model('comments');
var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });



router.get('/', function(req, res){
  Comment.find(function(err, comments){
    // console.log(comments);
    res.render(
      'index',
      {title:"Express", comments : comments}
    );
  });
});

// Get form
router.get('/form', function(req, res){
    res.render(
      'form',
      {title:"My funky form"}
    );
  });


// POST form
router.post('/form', function(req, res) {
  // console.log(req.body.comment);
  new Comment({title : req.body.comment, blog : req.body.blog})
  .save(function(err, comment){
    console.log(comment);
    res.redirect('/');
  });
});

// this orutes to a page that uses "res.send()" to print out the comment title
// the '/:id' will except anything because of the :
// req = request res = response these variable names could be changed to anything, but these are convention
// Comment.findById is a method of mongoose? pretty sure
// ???????? parameter order err, comment? how/from where does the err come first? convention or syntax, probs both?
// if a valid id value is passed in it retrieves the comment title
// res.send puts it on the page localhost:3000/'id#'
router.get('/:id', function(req, res) {
  Comment.findById(req.params.id, function(err, comment){
    if (err) {console.log(err)}
    res.send(comment.blog)
  });
});

module.exports = router;
