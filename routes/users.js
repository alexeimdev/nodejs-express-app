var express = require('express');
const fetch = require('node-fetch');
var router = express.Router();
var UserModel = require('../providers/UserModel');

/* GET users listing. */
// router.get('/:id', function (req, res, next) {
//     let id = req.params.id;
//     UserModel.findOne({ id: id }, function (err, user) {
//         if (err) throw err;
//         res.json(user);
//     });
// });

router.get('/insertnew', function (req, res, next) {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(json => json.results)
        .then(results => results[0])
        .then(user => {
            const newUser = new UserModel({
                gender: user.gender,
                name: {
                    title: user.name.title,
                    first: user.name.first,
                    last: user.name.last
                },
                location: {
                    street: user.location.street,
                    city: user.location.city,
                    state: user.location.state,
                    postcode: user.location.postcode
                },
                email: user.email,
                dob: user.dob,
                phone: user.phone,
                cell: user.cell,
                picture: {
                    large: user.picture.large,
                    medium: user.picture.medium,
                    thumbnail: user.picture.thumbnail
                }
            });
            newUser.save(function (err) {
                if (err) throw err;
                res.json('User saved successfully!');
            });
        })
        .catch((err) => {
            console.log(err);
        })
});

router.get('/getall', function (req, res, next) {
    UserModel.find({}, function(err, users) {
        var userMap = {};
    
        users.forEach(function(user) {
          userMap[user._id] = user;
        });
    
        res.send(userMap);  
      });
});

module.exports = router;