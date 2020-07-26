const mongoose = require('mongoose');

const catShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brief: String,
    age: Number,
    is_active: {
        type: Boolean,
        default: true
    }
}, {timestamps: true}) //Guarda fecha de modificacion

const Cat = mongoose.model('Cat', catShema);

module.exports = Cat