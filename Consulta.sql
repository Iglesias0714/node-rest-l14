CREATE DATABASE IF NOT EXISTS EmpathiShop;

USE EmpathiShop;

-- Tabla de Usuarios
CREATE TABLE Usuarios (
    UserID INT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Contraseña VARCHAR(255) NOT NULL
);

-- Tabla de Productos
CREATE TABLE Productos (
    ProductoID INT PRIMARY KEY,
    NombreProducto VARCHAR(100) NOT NULL,
    Descripcion TEXT,
    Precio DECIMAL(10, 2) NOT NULL,
    Stock INT NOT NULL,
    Categoria VARCHAR(50) NOT NULL
);

-- Tabla de Pedidos
CREATE TABLE Pedidos (
    PedidoID INT PRIMARY KEY,
    UserID INT,
    FechaPedido DATE NOT NULL,
    Estado VARCHAR(50) NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Usuarios(UserID)
);

-- Detalles del Pedido (relaciona productos y pedidos)
CREATE TABLE DetallesPedido (
    DetalleID INT PRIMARY KEY,
    PedidoID INT,
    ProductoID INT,
    Cantidad INT NOT NULL,
    PrecioUnitario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (PedidoID) REFERENCES Pedidos(PedidoID),
    FOREIGN KEY (ProductoID) REFERENCES Productos(ProductoID)
);


