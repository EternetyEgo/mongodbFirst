const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  age: String,
  jobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job", // Reference Job model directly
    },
  ],
});

const User = mongoose.model("User", UserSchema);
module.exports.User = User;
