const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    color: String,
    phone: Number
})

// Primer parametro de model: Nombre
// Segungo¡¡do parametro de model: schema (osea la plantilla anterior)

const User = mongoose.model('User', userSchema)

// Modo de exportar para utilizarlo en otro archivo
module.exports = User