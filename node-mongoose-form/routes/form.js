// var mongoose = require('mongoose');
// var Comment = mongoose.model('comments');
//
// var express = require('express');
// var router = express.Router();
//
// // Get form
// router.get('/', function(req, res){
//   Comment.find(function(err, comments){
//     console.log(comments);
//     res.render(
//       'form',
//       {title:"My funky form", comments : comments}
//     );
//   });
// });
//
// // POST form
// router.post('/', function(req, res) {
//   // console.log(req.body.comment);
//   new Comment({title : req.body.comment})
//   .save(function(err, comment){
//     console.log(comment);
//     res.redirect('/');
//   });
// });
//
// module.exports = router;
