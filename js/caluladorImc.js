// Calculador IMC online
// Referencias a elementos del DOM
const calcularBtn = document.getElementById('calcularBtn'); // Botón para calcular 
const pesoInput = document.getElementById('peso'); // Input para peso
const alturaInput = document.getElementById('altura'); // Input para altura
const resultadoElement = document.getElementById('resultado'); // Resultado

// Agregar evento al botón de cálculo
calcularBtn.addEventListener('click', function () {
  // Obtener los valores y convertirlos a números decimales
  let peso = parseFloat(pesoInput.value);
  let altura = parseFloat(alturaInput.value);

  // Verificar si los valores son válidos
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    // Mensaje de error con SweetAlert
    Swal.fire({
      icon: 'error', // Icono de error
      title: 'Error',
      text: 'Ingresa valores válidos para peso y altura.',
    });
  } else {
    // Calcular el IMC
    const imc = peso / (altura * altura);
    let mensaje = "IMC: " + imc.toFixed(2) + " - ";

    // Mensaje del IMC calculado
    if (imc < 18.5) {
      mensaje += "Bajo";
      resultadoElement.textContent = mensaje;
    } else if (imc < 30) {
      mensaje += "Medio";
      resultadoElement.textContent = mensaje;
    } else {
      mensaje += "Alto";
      resultadoElement.textContent = mensaje;
    }
    // Mensaje de éxito con SweetAlert
    Swal.fire({
      icon: 'success', // Icono de éxito
      title: 'Éxito',
      text: mensaje,
    });

    // Mostrar el resultado en el elemento HTML
    resultadoElement.textContent = mensaje;
  }
});
