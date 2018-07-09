var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	fullName: {
		type: String,
		required: true,
	},
	_id: { type: Schema.Types.ObjectId }
}, 
{ versionKey: false });

module.exports = mongoose.model('User', userSchema);