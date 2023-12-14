## Descripción del Proyecto

EmpathiShop es una plataforma integral que combina tecnologías modernas para brindar una experiencia de compra cómoda y accesible. El backend está construido con Node.js y Express, utilizando una base de datos MySQL para gestionar usuarios, productos y pedidos. La arquitectura del proyecto sigue las mejores prácticas para garantizar un desarrollo escalable y mantenible.

Clonar el repositorio en la máquina local:
   
   ```sh
   git clone https://github.com/Iglesias0714/node-rest-l14.git
   ```

## Configuración del Proyecto

### Requisitos Previos

- Node.js
- Docker
- Docker Compose

### Configuración de la Base de Datos

1. Crea un archivo `.secrets/db_root_password.txt` con la contraseña del usuario root de MySQL.
2. Crea un archivo `.secrets/db_password.txt` con la contraseña del usuario de tu base de datos de MySQL.

### Ejecutar la Aplicación
docker-compose up -d

### Estructura del Proyecto
1. src/': Contiene el código fuente de la aplicación.
2. controllers/': Controladores para gestionar las solicitudes HTTP.
3. models/': Modelos que interactúan con la base de datos.
4. dbconnection.js': Configuración de la conexión a la base de datos.
5. docker-compose.yml': Archivo de Docker Compose para configurar los contenedores.
6. package.json': Dependencias y scripts del proyecto.
7. Readme.md': Documentación del proyecto.

### Endpoints de la API
### Usuarios

- **GET /usuarios**
  - Obtiene la lista de usuarios.

- **GET /usuarios/:id**
  - Obtiene la información de un usuario específico por su ID.

- **POST /usuarios**
  - Crea un nuevo usuario.

### Productos

- **GET /productos**
  - Obtiene la lista de productos disponibles.

- **GET /productos/:id**
  - Obtiene la información de un producto específico por su ID.

- **POST /productos**
  - Crea un nuevo producto.

### Pedidos

- **GET /pedidos**
  - Obtiene la lista de todos los pedidos.

- **GET /pedidos/:id**
  - Obtiene la información de un pedido específico por su ID.

- **POST /pedidos**
  - Crea un nuevo pedido.

### Detalles de Pedido

- **GET /detalles-pedido**
  - Obtiene la lista de detalles de pedidos.

- **GET /detalles-pedido/:id**
  - Obtiene la información de un detalle de pedido específico por su ID.

- **POST /detalles-pedido**
  - Crea un nuevo detalle de pedido.

 La API estará disponible en `http://localhost:3000`.

## Documentación detallada

Para obtener información detallada sobre los endpoints y cómo utilizar la API,
consulta la [documentación detallada](./Docs/Endpoints/).

## Enlaces externos

- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)
