const { default: mongoose } = require("mongoose");


const register = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Register = mongoose.model('Register' , register)

module.exports.Register = Register