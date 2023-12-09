const {connectToMysql} = require('../dbconnection');

class DetPedidosModel
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db('DetallesPedido');
        return await query;
    }
    static async consultarPorId(id)
    {
        let db = await connectToMysql;
        return await db('DetallesPedido').where('DetalleID', id);
    }
    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('DetallesPedido').insert(datos).returning('DetalleID ');
        return result[0];
    }
}

module.exports = DetPedidosModel;
