//importe librería
const mongoose = require('mongoose');

//esqueleto de los documentos
const servicesSchema = new mongoose.Schema(
{
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
}
);

//llamar la colección
const Service = mongoose.model('Service', servicesSchema);

//exporte del modelo
module.exports = {
    Service
};