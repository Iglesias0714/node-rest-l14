# Obtener Lista de Productos

**Endpoint:** `GET /productos`

Permite obtener la lista de productos disponibles en el marketplace EmpathiShop.

## Ejemplo de Solicitud

```http
GET /productos
```
## Respuesta Exitosa (Código 200 OK)
  ```json
[
  {
    "id_producto": 1,
    "nombre": "Silla Adaptativa",
    "precio": 150.99,
    "categoria": "Mobiliario"
  },
  {
    "id_producto": 2,
    "nombre": "Bastón Inteligente",
    "precio": 49.99,
    "categoria": "Ayudas para la Movilidad"
  }
]
```
## Respuestas de Errores Posibles
# Código 404 Not Found:
```json
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontraron productos."
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
## Agregar un Nuevo Producto
# Endpoint: POST /productos
# Permite agregar un nuevo producto al catálogo de EmpathiShop.

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
