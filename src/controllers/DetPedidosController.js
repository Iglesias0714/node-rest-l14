const DetPedidosModel= require("../models/DetPedidosModel");

class DetPedidosController
{
    static async indexGet(req, res)
    {
        let data = await DetPedidosModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res){
        let id = req.params.id;
        let data = await DetPedidosController.consultarPorId(id);
        res.send(data);
    }
    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await DetPedidosModel.insertar(newData);

            res.status(201)
                .header('Location',`/temas/${insertedId}`)
                .send({status: 201, message: 'Created'});
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    } 
}

module.exports = DetPedidosController;