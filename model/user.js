const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 8
    },
    position: {
        type: String,
        required: true,
        max: 255,
        default: "Сотрудник"
    },
    access: {
        type: Number,
        required: true,
        default: 3
    }
})

module.exports = mongoose.model('user', userSchema);