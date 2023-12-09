const {connectToMysql} = require('../dbconnection');

class PedidosModel
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db('Pedidos');
        return await query;
    }
    static async consultarPorId(id)
    {
        let db = await connectToMysql;
        return await db('Pedidos').where('PedidoID', id);
    }
    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('Pedidos').insert(datos).returning('PedidoID');
        return result[0];
    }
}

module.exports = PedidosModel;