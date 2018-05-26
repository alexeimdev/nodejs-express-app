var express = require('express');
var router = express.Router();
var User = require('../providers/User');

/* GET users listing. */
router.get('/:id', function (req, res, next) {
  let id = req.params.id;
  User.findOne({ id: id }, function(err, user) {
    if (err) throw err;
    res.json(user);
  });
});

router.get('/insert', function (req, res, next) {
  var newUser = new User({
    id: req.query.id,
    name: req.query.name,
    age: req.query.age
  });

  newUser.save(function (err) {
    if (err) throw err;
    res.json('User saved successfully!');
  });
});


module.exports = router;