const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(({
    name: String,
    lastName: String,
    count: Number
}))

const Player = mongoose.model('Player', playerSchema);
module.exports.Player = Player;