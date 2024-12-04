const mongoose = require('mongoose')

const UserScheme = mongoose.Schema({
    name: String,
    age: Number,
    phone: Number
})

const User = mongoose.model('User', UserScheme)

exports.User = User