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
