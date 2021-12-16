const {Schema} = require("mongoose");
const {model} = require("mongoose");
var appointmentSchema = new Schema({

	fullname: {
        type: String,
        lowercase: false,
	},
	
	email: {
		type: String,
		// required: [true, 'Please fill email field'],
		// match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
		// lowercase: true,
	},
	mobileNmb: {
		type: String,
		// required: [true, 'Please fill phone number field'],
		// match: [/^\d{10}$/, 'Please fill a valid phone number']
	},
	disorder: {
		type: String,
		lowercase: true,
		trim: true,
		
	},
	schedule: {
		type: String,
		// required: [true, 'Please fill schedule field'],
	},
	msg: {
		type: String,
		default: 'investor',
		// required: true,
	},
	
	createdAt: {
		type: Date,
		default: Date.now,
	},

})


const appointment = model('appointment', appointmentSchema);
// export default appointment

module.exports = appointment