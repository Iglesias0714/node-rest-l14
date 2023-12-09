CREATE DATABASE IF NOT EXISTS EmpathiShop;

USE EmpathiShop;

-- Inserts para Usuarios
INSERT INTO Usuarios (UserID, Nombre, Apellido, Email, Contraseña)
VALUES
    (1, 'Juan', 'Pérez', 'juan@example.com', 'contrasena123'),
    (2, 'Ana', 'Gómez', 'ana@example.com', 'clave456'),
    (3, 'Carlos', 'Martínez', 'carlos@example.com', 'pass789');

-- Inserts para Productos
INSERT INTO Productos (ProductoID, NombreProducto, Descripcion, Precio, Stock, Categoria)
VALUES
    (1, 'Silla de ruedas', 'Silla de ruedas plegable y ligera', 199.99, 50, 'Movilidad'),
    (2, 'Bastón ajustable', 'Bastón ajustable para personas con problemas de movilidad', 29.99, 100, 'Movilidad'),
    (3, 'Teclado adaptativo', 'Teclado diseñado para facilitar su uso a personas con discapacidades', 49.99, 30, 'Tecnología');

-- Inserts para Pedidos
INSERT INTO Pedidos (PedidoID, UserID, FechaPedido, Estado)
VALUES
    (1, 1, '2023-01-15', 'En proceso'),
    (2, 2, '2023-02-01', 'Enviado'),
    (3, 3, '2023-02-10', 'Entregado');

-- Inserts para DetallesPedido
INSERT INTO DetallesPedido (DetalleID, PedidoID, ProductoID, Cantidad, PrecioUnitario)
VALUES
    (1, 1, 1, 2, 199.99),
    (2, 1, 2, 1, 29.99),
    (3, 2, 3, 1, 49.99),
    (4, 3, 1, 1, 199.99),
    (5, 3, 2, 2, 29.99);
