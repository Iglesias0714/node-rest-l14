# Pedidos Obtener Lista de Pedidos

**Endpoint:** `GET /pedidos`

Permite obtener la lista de todos los pedidos registrados en EmpathiShop.

## Ejemplo de Solicitud

```http
GET /pedidos
```
## Respuesta Exitosa (Código 200 OK)
```json
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
```
## Respuestas de Errores Posibles
# Código 404 Not Found:
```json
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontraron pedidos."
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
