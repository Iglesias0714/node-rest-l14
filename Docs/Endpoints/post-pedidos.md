### Realizar un Nuevo Pedido

Registra un nuevo pedido en EmpathiShop.

```http
POST /productos
```

- **Parámetros del Cuerpo (JSON)**
- `usuario_id` (obligatorio): Identificador único del usuario que realiza el pedido.
- `productos` (obligatorio): Lista de productos que se incluirán en el pedido, cada uno con su identificador y cantidad.

Ejemplo:
```json
{
  "usuario_id": 123,
  "productos": [
    { "producto_id": 1, "cantidad": 2 },
    { "producto_id": 3, "cantidad": 1 }
  ]
}
```
# Respuesta Exitosa (Código 200 OK)
```json
{
  "mensaje": "Pedido realizado con éxito",
  "pedido_id": 456
}
```
## Respuestas de Errores Posibles
# Código 400 Bad Request:
```json
{
  "error": "bad_request",
  "mensaje": "Los datos del pedido son inválidos"
}
```
# Código 404 Not Found:
```json
{
  "error": "not_found",
  "mensaje": "Usuario o productos no encontrados"
}
```
## Notas Adicionales
Asegúrate de proporcionar un usuario_id válido y una lista de productos válidos con cantidades.
Verifica que los productos especificados estén disponibles en el catálogo antes de realizar el pedido.
