 'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/my_db');
mongoose.Promise = global.Promise;
//var db = mongoose.connection;
// create a schema
var userSchema = new Schema({
    id: Number,
    name: String,
    age: Number
});

var User = mongoose.model('User', userSchema);

module.exports = User;