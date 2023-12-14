## Registrar un Nuevo Usuario
Endpoint: POST /usuarios

Permite registrar un nuevo usuario en EmpathiShop.

Ejemplo de Solicitud
```http
POST /usuarios
```
# Respuesta Exitosa (Código 201 Created)
```json
{
  "id_usuario": 3,
  "nombre": "Ana",
  "apellido": "Martínez",
  "email": "ana@example.com"
}
```
## Respuestas de Errores Posibles
#  Código 400 Bad Request
```json
{
  "errno": 400,
  "error": "bad_request",
  "error_description": "La solicitud es incorrecta o incompleta."
}
```
# Código 500 Internal Server Error:
```json
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud."
}
```
