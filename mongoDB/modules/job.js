const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  job: String,
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' // References User model
  }
});

const Job = mongoose.model('Job', JobSchema);
module.exports.Job = Job;