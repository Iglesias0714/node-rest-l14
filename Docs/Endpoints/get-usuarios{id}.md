## Obtener Detalles de un Usuario
Endpoint: GET /usuarios/{id}
Permite obtener información detallada sobre un usuario específico mediante su identificador único.

Parámetros de URL
{id} (obligatorio): Identificador único del usuario que se desea recuperar.

Ejemplo de Solicitud
``` http
GET /usuarios/1
```
# Respuesta Exitosa (Código 200 OK)
```json

{
  "id_usuario": 1,
  "nombre": "Juan",
  "apellido": "Pérez",
  "email": "juan@example.com"
}
```
## Respuestas de Errores Posibles
# Código 404 Not Found:

```jason 
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontró el usuario."
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
