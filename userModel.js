const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
}, {timestamps:true})

const userModel = mongoose.model("USer", registerSchema); // name of data table

module.exports = userModel;
