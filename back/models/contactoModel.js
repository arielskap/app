const mongoose = require('mongoose')
let Schema = mongoose.Schema

let Contacto = new Schema({
    nombre: {
        type: String,
        ref: 'Nombre',
        minlength : 3,
        maxlength : 50,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        ref: 'Email',
        minlength : 5,
        maxlength : 50,
        unique: true,
        index: true,
        required: [true, 'El email es necesario']
    },
    titulo: {
        type: String,
        ref: 'Titulo',
        minlength : 5,
        maxlength : 50,
        required: [true, 'El titulo es necesario']
    },
    mensaje: {
        type: String,
        ref: 'Mensaje',
        minlength : 5,
        maxlength : 500,
        required: [true, 'El mensaje es necesario']
    },
    creado_en: {
        type: Date,
        ref: 'Creado',
        required: [true, 'El Creado es necesario']
    },
})

module.exports = mongoose.model('Contacto', Contacto)