# Usuarios

## Obtener Lista de Usuarios

**Endpoint:** `GET /usuarios`

Permite obtener la lista de todos los usuarios registrados en EmpathiShop.

### Ejemplo de Solicitud

```http
GET /usuarios
```

#Respuesta Exitosa (Código 200 OK)
  ```json
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
 ```
## Respuestas de Errores Posibles
# Código 404 Not Found:
  ```json
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontraron usuarios."
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

