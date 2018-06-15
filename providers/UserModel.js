'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/my_db');
mongoose.Promise = global.Promise;


var userSchema = new Schema({
    gender: String,
    name: {
        title: String,
        first: String,
        last: String,
    },
    location: {
        street: String,
        city: String,
        state: String,
        postcode: String
    },
    email: String,
    dob: String,
    phone: String,
    cell: String,
    picture: {
        large: String,
        medium: String,
        thumbnail: String
    }
});

var UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;