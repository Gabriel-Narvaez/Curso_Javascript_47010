//Shop de la pagina
// Definición de los productos
let productos = [
  { titulo: 'Healthcare', precio: 2250.50, cantidadDisponible: 100 },
  { titulo: 'Agenda IMC', precio: 3500.40, cantidadDisponible: 150 },
  { titulo: 'Train IMC', precio: 4518.75, cantidadDisponible: 80 },
  { titulo: 'Meditar IMC', precio: 2010.00, cantidadDisponible: 20 }
];

// Función para mostrar los productos en el select
function mostrarProductosEnSelect() {
  // Obtener select del HTML con el id "producto"
  let selectProducto = document.getElementById('producto');
  // Recorrer los productos y crear una opción para cada uno
  productos.forEach(producto => {
    // Crear elemento <option>
    let option = document.createElement('option');
    // Establecer valor y texto de la opción con el título del producto
    option.value = option.textContent = producto.titulo;
    // Agregar opción al elemento <select>
    selectProducto.appendChild(option);
  });
}

// Función para comprar
function realizarCompra() {
  // Obtener elementos del formulario por ID
  let selectProducto = document.getElementById('producto');
  let cantidadInput = document.getElementById('cantidad');

  // Obtener valores seleccionados
  let selectedProduct = selectProducto.value;
  let cantidadCompra = parseInt(cantidadInput.value);

  // Buscar producto en la lista de productos
  let productoSeleccionado = productos.find(producto => producto.titulo === selectedProduct);

  // Validar la selección y la cantidad (operadores ternarios)
  let mensajeResultado = !productoSeleccionado
    ? 'Por favor, seleccione un producto válido.'
    : isNaN(cantidadCompra) || cantidadCompra <= 0
      ? 'Por favor, ingrese una cantidad válida.'
      : cantidadCompra > productoSeleccionado.cantidadDisponible
        ? 'No hay suficiente stock.'
        : '';

  // Si no hay errores, realizar la compra
  if (!mensajeResultado) {
    // Actualizar la cantidad 
    productoSeleccionado.cantidadDisponible -= cantidadCompra;
    // Calcular total a pagar
    let totalAPagar = productoSeleccionado.precio * cantidadCompra;
    mensajeResultado = `Compraste ${cantidadCompra} unidades de ${productoSeleccionado.titulo}. Total a pagar: $${totalAPagar.toFixed(2)}. Stock restante: ${productoSeleccionado.cantidadDisponible}`;

    // Alerta de SweetAlert 
    Swal.fire({
      icon: 'success',
      title: 'Compra Exitosa',
      text: mensajeResultado,
    });

    // Reset del formulario 
    document.getElementById('cantidad').value = '';
  }

  // Mensaje de resultado
  document.getElementById('mensajeResultado').textContent = mensajeResultado;
}

// Función para mostrar los productos en el select
mostrarProductosEnSelect();
