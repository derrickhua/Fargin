var mongoose = require('mongoose');

var logSchema = new mongoose.Schema({
  duration: Number,
  progress: String,
}, {
  timestamps: true
})

var habitSchema = new mongoose.Schema({
  name: String,
  specificGoal: String,
  logs: [logSchema],
}, {
  timestamps: true
});



var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  habits: [habitSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);