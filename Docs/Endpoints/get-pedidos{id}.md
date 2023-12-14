# Endpoint: GET /pedidos/{id}

Permite obtener información detallada sobre un pedido específico mediante su identificador único.

## Parámetros de URL

- `{id}` (obligatorio): Identificador único del pedido que se desea recuperar.

## Ejemplo de Solicitud

```http
GET /pedidos/1
```

## Respuesta Exitosa (Código 200 OK)
  ```json
{
  "id_pedido": 1,
  "fecha": "2023-12-15",
  "total": 150.25,
  "estado": "En Proceso",
  "detalles": [
    {
      "id_detalle": 1,
      "producto": "Adaptador para Silla de Ruedas",
      "cantidad": 2,
      "subtotal": 50.25
    },
    {
      "id_detalle": 2,
      "producto": "Bastón con Sensores",
      "cantidad": 1,
      "subtotal": 100.00
    }
  ]
}
```
## Respuestas de Errores Posibles
# Código 404 Not Found:
```json
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontró el pedido."
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
