const { Cita } = require('../models/citas.modules')

async function createCita(req,res){
    const {date, time, serviceId, name} = req.body
    console.log(req.body);
    
    try {
        const newCita = await new Cita({
            "date": date,
            "time": time,
            "serviceId": serviceId,
            "name": name
        }).save();
        return res.status(200).json({"succes": true, "data":newCita});
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message:"No se pudo crear la cita.",
            data:[]
        });
    }
}

async function readCitas(req, res){
    const {userId, userTypeId, serviceId} =req.body;
    console.log(req.body);

    try{
        citasList = await Cita.find();
        console.log(citasList);

        if( citasList && citasList.length > 0 ){
            return res.status(200).json(citasList);
        }else{
            return res.status(204).json([]);
        }
    }catch (err) {
        console.log(err);

        return res.status(500).json({
            message:"Error al encontrar servicios.",
            data:[]
        });
    }
}

module.exports = {
    createCita,
    readCitas
}