const express = require('express');
const app = express();
const puerto = 80;

const PedidosController = require('./controllers/PedidosController');
app.use(express.json());
app.get('/pedidos', PedidosController.indexGet);
app.get('/pedidos/:id([0-9]+)', PedidosController.itemGet);
app.post('/pedidos',PedidosController.indexPost);

const DetPedidosController = require('./controllers/DetPedidosController'); 
app.use(express.json());
app.get('/detalles-pedidos', DetPedidosController.indexGet);
app.get('/detalles-pedidos/:id([0-9]+)', DetPedidosController.itemGet);
app.post('/detalles-pedidos', DetPedidosController.indexPost);

const ProductosController = require('./controllers/ProductosController');
app.use(express.json());
app.get('/productos', ProductosController.indexGet);
app.get('/productos/:id([0-9]+)', ProductosController.itemGet);
app.post('/productos', ProductosController.indexPost);

const UsuariosController = require('./controllers/UsuariosController');
app.use(express.json());
app.get('/usuarios', UsuariosController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosController.itemGet);
app.post('/usuarios', UsuariosController.indexPost); 

app.get('/', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hola mundo!');
});

app.listen(puerto, function() {
    console.log('Servidor iniciado en el puerto:', puerto);
});

