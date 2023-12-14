Obtener Detalles de un Producto
Endpoint: GET /productos/{id}

Permite obtener información detallada sobre un producto específico mediante su identificador único.

Parámetros de URL
{id} (obligatorio): Identificador único del producto que se desea recuperar.

Ejemplo de Solicitud
http
Copy code
GET /productos/1
Respuesta Exitosa (Código 200 OK)
json
Copy code
{
  "id_producto": 1,
  "nombre": "Silla Adaptativa",
  "precio": 150.99,
  "categoria": "Mobiliario"
}
Respuestas de Errores Posibles
Código 404 Not Found:

json
Copy code
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontró el producto."
}
Código 500 Internal Server Error:

json
Copy code
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud."
}
