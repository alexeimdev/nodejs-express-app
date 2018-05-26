var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function (req, res, next) {

  const data = [
    { id: 1, name: "Alexei", age: 33 },
    { id: 2, name: "Benny", age: 35 }
  ]

  if (req.query) {
    let users = data;
    if (req.query.id) {
      users = users.filter(item => {
        return item.id == req.query.id
      })
    }
    if (req.query.name) {
      users = users.filter(item => {
        return item.name == req.query.name
      })
    }
    if (req.query.age) {
      users = users.filter(item => {
        return item.age == req.query.age
      })
    }

    res.json({
        success: true,
        users: users
    })
  }
});

module.exports = router;
