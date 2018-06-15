var express = require('express');
const fetch = require('node-fetch');
var router = express.Router();
var UserModel = require('../providers/UserModel');

router.get('/insertnew/:numberOfResults', function (req, res, next) {
    const numberOfResults = req.params.numberOfResults;
    fetch(`https://randomuser.me/api/?page=1&results=${numberOfResults}&seed=abc`)
        .then((response) => { 
            return response.json() 
        })
        .then((json) => {
            return json.results
        })
        .then(results => {
            let users = [];
            results.forEach(user => {
                try {
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
                    users.push(newUser);
                }
                catch (err) {
                    console.log(err);
                }
            });

            UserModel.create(users, function (err) {
                if (err) throw err;
                res.json(`${numberOfResults} users saved successfully!`);
            });
            
        })
        .catch((err) => {
            throw err;
        })

});

router.get('/getall', function (req, res, next) {
    try {
        UserModel.find({}, function (err, docs) {
            if (!err) {
                const users = docs.map(item => item['_doc'])
                res.json(users);
            } else {
                throw err;
            }
        });
    } catch (err) {
        console.log(err);
    }
});

router.get('/getuser/:id', function (req, res, next) {
    try {
        UserModel.find({ _id: req.params.id }, function (err, docs) {
            if (!err) {
                const user = docs.map(item => item['_doc'])[0]
                res.json(user);
            } else {
                throw err;
            }
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;