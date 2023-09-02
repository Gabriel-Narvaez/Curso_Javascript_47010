//Shop de la pagina
// Definición de los productos
let productos = [
  { titulo: 'Healthcare', precio: 2250.50, cantidadDisponible: 100 },
  { titulo: 'Agenda IMC', precio: 3500.40, cantidadDisponible: 150 },
  { titulo: 'Train IMC', precio: 4518.75, cantidadDisponible: 80 },
  { titulo: 'Meditar IMC', precio: 2010.00, cantidadDisponible: 20 }
];

// Función para mostrarlos en el select
function mostrarProductosEnSelect() {
  // Obtener <select> del HTML con el id "producto"
  let selectProducto = document.getElementById('producto');
  // Recorrer los productos y crear una opción <option> para cada uno
  productos.forEach(producto => {
    // Crear elemento <option>
    let option = document.createElement('option');
    // Establecer valor opción con titulo del producto
    option.value = producto.titulo;
    // Establecer texto de la opción
    option.textContent = producto.titulo;
    // Agregar opción al elemento <select>
    selectProducto.appendChild(option);
  });
}

// Función para comprar
function realizarCompra() {
  // <select> del HTML con el id "producto"
  let selectProducto = document.getElementById('producto');
  // producto seleccionado
  let selectedProduct = selectProducto.value;
  // <input> del HTML con el id "cantidad" 
  let cantidadInput = document.getElementById('cantidad');
  // Convertir cantidad a número entero
  let cantidadCompra = parseInt(cantidadInput.value);
  // Buscar producto en la lista de productos
  let productoSeleccionado = productos.find(producto => producto.titulo === selectedProduct);
  // Verificar si existe
  if (!productoSeleccionado) {
    document.getElementById('mensajeResultado').textContent = 'Por favor, seleccione un producto válido.';
    return;
  }
  // Verificar si la cantidad es válida
  if (isNaN(cantidadCompra) || cantidadCompra <= 0) {
    document.getElementById('mensajeResultado').textContent = 'Por favor, ingrese una cantidad válida.';
    return;
  }
  // Verificar stock disponible
  if (cantidadCompra > productoSeleccionado.cantidadDisponible) {
    document.getElementById('mensajeResultado').textContent = 'No hay suficiente stock.';
    return;
  }
  // Actualizar la cantidad 
  productoSeleccionado.cantidadDisponible -= cantidadCompra;
  // Calcular el total a pagar
  let totalAPagar = productoSeleccionado.precio * cantidadCompra;
  // Mostrar un mensaje 
  document.getElementById('mensajeResultado').textContent = `Compraste ${cantidadCompra} unidades de ${productoSeleccionado.titulo}. Total a pagar: $${totalAPagar.toFixed(2)}. Stock restante: ${productoSeleccionado.cantidadDisponible}`;
}

// Llamar función para mostrar los productos en el select
mostrarProductosEnSelect();