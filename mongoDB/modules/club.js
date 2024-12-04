const mongoose = require("mongoose");


const clubSchema = new mongoose.Schema(({
    name: String,
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }
}))
const Club = mongoose.model('Club', clubSchema);
module.exports.Club = Club