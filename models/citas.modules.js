const mongoose = require('mongoose');

const citasSchema = new mongoose.Schema(
{
    date:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required:true
    },
    serviceId:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
}
);

const Cita = mongoose.model('Cita', citasSchema);

module.exports = {
    Cita
};