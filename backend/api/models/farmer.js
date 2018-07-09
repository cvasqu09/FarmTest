var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var farmerSchema = new Schema({
	fullName: {
		type: String,
		required: true,
		minlength: [5, 'Name must be at least 5 characters long'],
		maxlength: [30, 'Name must not be greater than 30 characters long']
	},
	location: {
		type: String,
		required: true
	},
	inventory: {
		type: Array
	},
	users: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	_id: { type: Schema.Types.ObjectId }
}, 
{ versionKey: false });

module.exports = mongoose.model('Farmer', farmerSchema);