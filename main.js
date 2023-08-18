// Calculador IMC online
function calcularIMC() {
  //Solicitud de datos
  let peso = parseFloat(prompt("Ingresa tu peso en kg:"));
  let altura = parseFloat(prompt("Ingresa tu altura en metros:"));

  // Ciclo para validar que se ingresen valores válidos para peso y altura
  while (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Ingresa valores válidos para peso y altura.");
    peso = parseFloat(prompt("Ingresa tu peso en kg:"));
    altura = parseFloat(prompt("Ingresa tu altura en metros:"));
    break;
  }
  // Calculo IMC
  const imc = peso / (altura * altura);
  console.log("El valor IMC es: ", imc);
  let mensaje = "";

  // Codigo condicional para verificar IMC y mensaje de respuesta
  if (imc < 18.5) {
    mensaje = "IMC: " + imc + " - Bajo";
    // Alerta por peso insuficiente
    alert("¡Tu IMC es menor o igual a 18.5! Considera consultar a un medico.");
  } else if (imc >= 18.5 && imc < 30) {
    mensaje = "IMC: " + imc + " - Medio";
    alert("¡Tu IMC se encuentra entre 18.5 y 30! Rango normal.");
  } else {
    mensaje = "IMC: " + imc + " - Alto";
    // Alerta por sobrepeso
    alert("¡Tu IMC es mayor o igual a 30! Considera consultar a un medico.");

  }
  // Muestra resultado en la pagina
  document.getElementById("resultado").innerText = mensaje;
}

// Calculador Peso Ideal
function calcularPesoIdeal() {
  //Solicitud de altura
  let altura = parseFloat(prompt("Ingresa tu altura en metros:"));
  // Verifica altura válida y mayor a cero
  if (!isNaN(altura) && altura > 0) {
    // Calcula el rango de peso ideal según la altura
    let pesoMinimo = 18.5 * (altura * altura);
    let pesoMaximo = 25 * (altura * altura);
    let mensajePesoIdeal = `El rango de peso ideal para tu altura es entre ${pesoMinimo} kg y ${pesoMaximo} kg.`;
    //Solicitud de peso
    let peso = parseFloat(prompt("Ingresa tu peso en kg:"));
    // Verifica peso válido y mayor a cero
    if (!isNaN(peso) && peso > 0) {
      const imc = peso / (altura * altura);
      let resultado = '';
      // Determina el estado del peso según el IMC
      if (imc < 18.5) {
        resultado = 'por debajo del peso ideal';
      } else if (imc >= 18.5 && imc <= 25) {
        resultado = 'en el rango de peso ideal';
      } else {
        resultado = 'por encima del peso ideal';
      }
      // Mensaje final
      const mensaje = `Tu IMC es ${imc}, lo que indica que estás ${resultado}. ${mensajePesoIdeal}`;
      alert(mensaje);
    } else {
      alert("Por favor, ingresa un peso válido.");
    }
    // Mensaje de error 
  } else {
    alert("Por favor, ingresa una altura válida.");
  }
}

// Agenda de turnos
function agendarTurno() {
  // Solicitar datos
  let nombre = prompt("Ingresa tu nombre:");
  let apellido = prompt("Ingresa tu apellido:");
  let telefono = prompt("Ingresa tu telefono:");
  let email = prompt("Ingresa tu email:");
  // Verificar si son válidos
  if (nombre && apellido && (!isNaN(telefono)) && (email.includes("@"))) {
    let fecha = prompt("Ingresa la fecha (AAAA-MM-DD):");
    let hora = prompt("Ingresa la hora (HH:MM):");
    // Solicitar fecha y hora 
    if (fecha && hora) {
      // Mensaje de confirmación
      const mensaje = `¡Turno agendado para ${nombre} ${apellido} el ${fecha} a las ${hora}!`;
      alert(mensaje);
    } else {
      // Mensaje de error
      alert("Por favor, ingresa una fecha y hora válidas.");
    }
  } else {
    alert("Por favor, ingresa datos válidos.");
  }
}

//Shop de la pagina
// Definición de productos como objetos
let productos = [
  { titulo: 'Healthcare', precio: 2250.50, cantidadDisponible: 100 },
  { titulo: 'Agenda IMC', precio: 3500.40, cantidadDisponible: 150 },
  { titulo: 'Train IMC', precio: 4518.75, cantidadDisponible: 80 },
  { titulo: 'Meditar IMC', precio: 2010.00, cantidadDisponible: 20 }
];
// Función para mostrar los títulos de los productos
function mostrarProductosDisponibles() {
  let mensaje = 'Productos Disponibles:';
  productos.forEach(producto => {
    mensaje += `- ${producto.titulo}`;
  });

  return mensaje;
}
// Función para comprar
function comprarProducto() {
  let mensajeProductos = mostrarProductosDisponibles();
  // Solicitar nombre del producto a comprar
  let nombreProducto = prompt(`${mensajeProductos} - Ingrese el nombre completo del producto que desea comprar:`);
  // Buscar el producto
  let productoSeleccionado = productos.find(producto => producto.titulo.toLowerCase() === nombreProducto.toLowerCase());

  if (!productoSeleccionado) {
    alert('Producto no encontrado. Por favor, ingrese un nombre de producto válido.');
    return;
  }
  // Solicitar cantidad a comprar
  let cantidadCompra = parseInt(prompt(`-Producto: ${productoSeleccionado.titulo} -Precio: $${productoSeleccionado.precio.toFixed(2)} -Cantidad disponible: ${productoSeleccionado.cantidadDisponible} -Ingrese la cantidad que desea comprar:`));
  // Verificar si es válida
  if (isNaN(cantidadCompra) || cantidadCompra <= 0) {
    alert('Cantidad inválida. Por favor, ingrese una cantidad válida.');
    return;
  }
  // Verificar stock disponible
  if (cantidadCompra > productoSeleccionado.cantidadDisponible) {
    alert('No hay suficiente stock disponible.');
    return;
  }
  // Actualizar la cantidad disponible
  productoSeleccionado.cantidadDisponible -= cantidadCompra;
  alert(`Has comprado ${cantidadCompra} unidades de ${productoSeleccionado.titulo}. -Total a pagar: $${(productoSeleccionado.precio * cantidadCompra)} -Stock restante: ${productoSeleccionado.cantidadDisponible}`);
}
