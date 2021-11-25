const { Service } = require('../models/services.model')

//crear servicio
async function createService(req, res){
    const {name, description} = req.body;

    console.log(name)
    console.log(description)

    try {
        const newService = await new Service({
            "name": name,
            "description": description
        }).save();
        return res.status(200).json({"succes": true, "data":newService});
    } catch (err) {
        return res.status(500).json({
            message:"No se pudo crear el servicio.",
            data:[]
        });
    }


}

//obtener todos los servicios
async function readServices(req, res){
    const {userId, userTypeId, businessId} =req.body;

    console.log(req.body);

    try{
        servicesList = await Service.find();
        console.log(servicesList);

        if( servicesList && servicesList.length > 0 ){
            return res.status(200).json(servicesList);
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

//editar servicio
async function updateService (req, res){
    const {newName, newDescription} = req.body;
    const{id}=req.params;
    
    console.log(res.body);

    try {
        console.log(req.body)

            const newService = await Service.findByIdAndUpdate(id, req.body);
            
            return res.status(200).json({"succes": true, "data":newService});
    } catch (err) {

        console.log(err);
        return res.status(500).json({
            message:"No se pudo actualizar el servicio.",
            data:[]
        });
    }
} 

//Borrar un servicio
async function deleteService(req, res){
    const {newName, newDescription} = req.body;
    const{id}=req.params;

        try{
            console.log("Borrando servicio...");
            const a = await Service.findByIdAndRemove(id);
            return res.status(200).json({"succes": true, "data":a});
        }catch (err){
            console.error("No se pudo borrar el servicio");
            console.log(err);
        }
}

module.exports = {
    createService,
    readServices,
    updateService,
    deleteService
}