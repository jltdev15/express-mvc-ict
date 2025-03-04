const mongoose = require('mongoose');

// 1 Create an schema
const usersSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
});

// 2 Create model for your schema
module.exports = mongoose.model('User', usersSchema);