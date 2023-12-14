# Obtener Lista de Detalles de Pedidos

**Endpoint:** `GET /detalles-pedidos`

Permite obtener la lista de detalles de pedidos asociados a los pedidos en EmpathiShop.

## Ejemplo de Solicitud
GET /detalles-pedidos

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_detalle": 1,
    "id_pedido": 1,
    "producto": "Adaptador para Silla de Ruedas",
    "cantidad": 2,
    "subtotal": 50.25
  },
  {
    "id_detalle": 2,
    "id_pedido": 1,
    "producto": "Bastón con Sensores",
    "cantidad": 1,
    "subtotal": 100.00
  }
]
 ```
## Respuestas de Errores Posibles
- Código 404 Not Found
 ```json
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontraron detalles de pedidos."
}
```
- Código 500 Internal Server Error
 ```json
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud."
}
```
