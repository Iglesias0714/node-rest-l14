## Agregar un Nuevo Producto
#Endpoint: POST /productos
 Permite agregar un nuevo producto al catálogo de EmpathiShop.

# Ejemplo de Solicitud

```http
POST /productos
```
# Respuesta Exitosa (Código 201 Created)
```json
{
  "id_producto": 3,
  "nombre": "Audífonos Adaptativos",
  "precio": 79.99,
  "categoria": "Ayudas para la Audición"
}
```
## Respuestas de Errores Posibles
# Código 400 Bad Request:
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
