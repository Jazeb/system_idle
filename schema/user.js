const mongoose = require('mongoose').set('debug', true);
const Schema = mongoose.Schema;

const User = Schema({
    dob: {
        type: String,
        required: [true, 'DOB is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    }
}, { collection: 'people' }, { __v: false });

module.exports = mongoose.model('users', User);