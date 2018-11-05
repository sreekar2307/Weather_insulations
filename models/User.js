var mongoose = require('mongoose');
var passportlocalMongoose = require('passport-local-mongoose');


var UserSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	username:String,
	phone_number: String,
	password: String
});

UserSchema.plugin(passportlocalMongoose);

module.exports = mongoose.model('User',UserSchema);

