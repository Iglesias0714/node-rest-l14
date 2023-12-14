### Documentación de la API RESTful

## Bienvenido a la documentación de la API.
Bienvenido a la documentación de Lorenzzo. A continuación, se presenta una descripción general de este mismo, los requisitos, instrucciones de instalación y una lista de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Descripción General del proyecto
EmpathiShop es una Marketplace enfocado a personas con discapacidad, ofrece cualquier tipo de aparato adaptativo.

| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /usuarios`](./Endpoints//get-usuarios.md)            | Recupera la lista de todos los usuarios disponibles. |  
| [`GET /usuarios/{id}/`](./Endpoints//get-usuarios{id}.md) | Obtiene la lista de un usuario específico. |
| [`GET /productos`](./Endpoints//get-productos.md)             | Recupera la lista de todos los productos disponibles. | 
| [`GET /productos/{id}`](./Endpoints//get-productos{id}.md) | Obtiene información detallada sobre un producto específico. |
| [`GET /pedidos`](./Endpoints//get-pedidos.md)             | Recupera la lista de todos los pedidos disponibles. | 
| [`GET /pedidos/{id}`](./Endpoints//get-pedidos{id}.md)        | Obtiene información detallada sobre un pedido específico. |
| [`GET /detalles-pedidos`](./Endpoints//get-detalles-pedidos.md)             | Recupera la lista de todos los detalles de un pedido disponibles. | 
| [`GET /detalles-pedidos/{id}`](./Endpoints//get-detalles-pedidos{id}.md)      | Obtiene información detallada sobre los detalles de un pedido específico. |
| [`POST /usuarios/{id}/`](./Endpoints//post-usuarios.md) | Se usa para modificar el id de un usuario |
| [`POST /productos/{id}`](./Endpoints//post-productos.md) | Se usa para modificar el id de un producto |         
| [`POST /pedidos/{id}`](./Endpoints//post-pedidos.md)      | Se usa para modificar el id de un pedido |     
| [`POST /detalles-pedidos/{id}`](./Endpoints//post-detalles-pedidos.md)  | Se usa para modificar el id del detalle de un pedido |         
