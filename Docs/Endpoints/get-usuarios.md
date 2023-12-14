Usuarios
Obtener Lista de Usuarios
Endpoint: GET /usuarios

Permite obtener la lista de todos los usuarios registrados en EmpathiShop.

Ejemplo de Solicitud
http
Copy code
GET /usuarios
Respuesta Exitosa (Código 200 OK)
json
Copy code
[
  {
    "id_usuario": 1,
    "nombre": "Juan",
    "apellido": "Pérez",
    "email": "juan@example.com"
  },
  {
    "id_usuario": 2,
    "nombre": "María",
    "apellido": "González",
    "email": "maria@example.com"
  }
]
Respuestas de Errores Posibles
Código 404 Not Found:

json
Copy code
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontraron usuarios."
}
Código 500 Internal Server Error:

json
Copy code
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud."
}


Registrar un Nuevo Usuario
Endpoint: POST /usuarios

Permite registrar un nuevo usuario en EmpathiShop.

Ejemplo de Solicitud
http
Copy code
POST /usuarios
Respuesta Exitosa (Código 201 Created)
json
Copy code
{
  "id_usuario": 3,
  "nombre": "Ana",
  "apellido": "Martínez",
  "email": "ana@example.com"
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




