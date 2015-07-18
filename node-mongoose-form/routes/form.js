var express = require('express');
var router = express.Router();

// Get form
router.get('/', function(req, res){
  res.render('form', {title:"My funky form"});
});

// POST form
router.post('/', function(req, res) {
  console.log(req.body.comment);
  res.redirect('/');
});

module.exports = router;
