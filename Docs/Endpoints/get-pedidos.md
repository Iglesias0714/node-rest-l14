Pedidos
Obtener Lista de Pedidos
Endpoint: GET /pedidos

Permite obtener la lista de todos los pedidos registrados en EmpathiShop.

Ejemplo de Solicitud
http
Copy code
GET /pedidos
Respuesta Exitosa (Código 200 OK)
json
Copy code
[
  {
    "id_pedido": 1,
    "fecha": "2023-12-15",
    "total": 150.25,
    "estado": "En Proceso"
  },
  {
    "id_pedido": 2,
    "fecha": "2023-12-16",
    "total": 99.99,
    "estado": "Completado"
  }
]
Respuestas de Errores Posibles
Código 404 Not Found:

json
Copy code
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontraron pedidos."
}
Código 500 Internal Server Error:

json
Copy code
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud."
}


EmpathiShop API - Documentación de Endpoints
Pedidos
Obtener Lista de Pedidos
Endpoint: GET /pedidos

Permite obtener la lista de todos los pedidos registrados en EmpathiShop.

Ejemplo de Solicitud
http
Copy code
GET /pedidos
Respuesta Exitosa (Código 200 OK)
json
Copy code
[
  {
    "id_pedido": 1,
    "fecha": "2023-12-15",
    "total": 150.25,
    "estado": "En Proceso"
  },
  {
    "id_pedido": 2,
    "fecha": "2023-12-16",
    "total": 99.99,
    "estado": "Completado"
  }
]
Respuestas de Errores Posibles
Código 404 Not Found:

json
Copy code
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontraron pedidos."
}
Código 500 Internal Server Error:

json
Copy code
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud."
}
Obtener Detalles de un Pedido
Endpoint: GET /pedidos/{id}

Permite obtener información detallada sobre un pedido específico mediante su identificador único.

Parámetros de URL
{id} (obligatorio): Identificador único del pedido que se desea recuperar.

Ejemplo de Solicitud
http
Copy code
GET /pedidos/1
Respuesta Exitosa (Código 200 OK)
json
Copy code
{
  "id_pedido": 1,
  "fecha": "2023-12-15",
  "total": 150.25,
  "estado": "En Proceso",
  "detalles": [
    {
      "id_detalle": 1,
      "producto": "Adaptador para Silla de Ruedas",
      "cantidad": 2,
      "subtotal": 50.25
    },
    {
      "id_detalle": 2,
      "producto": "Bastón con Sensores",
      "cantidad": 1,
      "subtotal": 100.00
    }
  ]
}
Respuestas de Errores Posibles
Código 404 Not Found:

json
Copy code
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontró el pedido."
}
Código 500 Internal Server Error:

json
Copy code
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud."
}
Realizar un Nuevo Pedido
Endpoint: POST /pedidos

Permite realizar un nuevo pedido en EmpathiShop.

Ejemplo de Solicitud
http
Copy code
POST /pedidos
Respuesta Exitosa (Código 201 Created)
json
Copy code
{
  "id_pedido": 3,
  "fecha": "2023-12-17",
  "total": 75.50,
  "estado": "En Proceso"
}
Respuestas de Errores Posibles
Código 400 Bad Request:

json
Copy code
{
  "errno": 400,
  "error": "bad_request",
  "error_description": "La solicitud es incorrecta o incompleta."
}
Código 500 Internal Server Error:

json
Copy code
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud."
}