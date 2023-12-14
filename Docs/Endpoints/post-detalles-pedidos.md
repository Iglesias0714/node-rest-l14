### Agregar Detalle de Pedido a un Pedido Existente

Agrega un nuevo detalle de pedido a un pedido existente en EmpathiShop.

## Ejemplo de Solicitud

``` http
POST /detallespedidos
```
# POST /detalles-pedidos

- **Parámetros del Cuerpo (JSON)**
- `pedido_id` (obligatorio): Identificador único del pedido al que se añadirá el detalle.
- `producto_id` (obligatorio): Identificador único del producto asociado al detalle.
- `cantidad` (obligatorio): Cantidad del producto en el detalle.

# Ejemplo:

```json
{
  "pedido_id": 456,
  "producto_id": 1,
  "cantidad": 3
}
```
# Respuesta Exitosa (Código 200 OK)
```json
{
  "mensaje": "Detalle de pedido agregado con éxito",
  "detalle_pedido_id": 789
}
```
## Respuestas de Errores Posibles
# Código 400 Bad Request:
```json
{
  "error": "bad_request",
  "mensaje": "Los datos del detalle de pedido son inválidos"
}
```
# Código 404 Not Found:
```json
{
  "error": "not_found",
  "mensaje": "Pedido o producto no encontrados"
}
```
# Notas Adicionales
Asegúrate de proporcionar un pedido_id válido, producto_id válido y una cantidad válida para el nuevo detalle.
Verifica que el pedido y el producto especificados existan antes de agregar el detalle.
