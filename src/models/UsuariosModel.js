const {connectToMysql} = require('../dbconnection');

class UsuariosModel
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db('Usuarios');
        return await query;
    }
    static async consultarPorId(id)
    {
        let db = await connectToMysql;
        return await db('Usuarios').where('UserID', id);
    }
    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('Usuarios').insert(datos).returning('UserID');
        return result[0];
    }
}

module.exports = UsuariosModel;
