//Función para calcular el peso ideal
function calcularPesoIdeal() {
    // Valor ingresado en entrada 'alturaPesoIdeal' y convertido en número decimal
    const alturaPesoIdeal = parseFloat(document.getElementById('alturaPesoIdeal').value);
    // Verificar si es un número válido y mayor que cero
    if (!isNaN(alturaPesoIdeal) && alturaPesoIdeal > 0) {
        // Calcula peso mínimo y máximo utilizando la fórmula IMC
        const pesoMinimo = 18.5 * (alturaPesoIdeal * alturaPesoIdeal);
        const pesoMaximo = 25 * (alturaPesoIdeal * alturaPesoIdeal);
        // Mensaje de peso ideal (formato tofixed para redondear número)
        const mensajePesoIdeal = `El peso ideal para tu altura es entre ${pesoMinimo.toFixed(2)} kg y ${pesoMaximo.toFixed(2)} kg.`;
        // Alerta éxito con SweetAlert
        Swal.fire({
            icon: 'success', 
            title: 'Peso Ideal Calculado',
            text: mensajePesoIdeal,
          });
  
        // Mensaje de peso ideal en elemento HTML, ID 'mensajePesoIdeal'
        document.getElementById('mensajePesoIdeal').textContent = mensajePesoIdeal;
    } else {
        // Alerta error con SweetAlert
        Swal.fire({
            icon: 'error', 
            title: 'Error',
            text: 'Ingresa una altura válida.',
          });
        //Mensaje de error
        document.getElementById('mensajePesoIdeal').textContent = "Ingresa una altura válida.";
    }
}
