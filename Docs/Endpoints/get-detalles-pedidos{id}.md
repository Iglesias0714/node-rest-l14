# Endpoint: GET /detalles-pedidos/{id}

Permite obtener información detallada sobre un detalle de pedido específico mediante su identificador único.

## Parámetros de URL

- `{id}` (obligatorio): Identificador único del detalle de pedido que se desea recuperar.

## Ejemplo de Solicitud

```http
GET /detalles-pedidos/1
```
## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_detalle_pedido": 1,
  "id_pedido": 123,
  "id_producto": 1,
  "cantidad": 2,
  "precio_unitario": 150.99
}
```

## Respuestas de Errores Posibles
# Código 404 Not Found
```json
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontró el detalle de pedido."
}
```
# Código 500 Internal Server Error
```json
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud."
}
```
## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información correcta
