// Formulario de contacto 
// Obtener elementos del formulario por ID
const contactForm = document.getElementById('contactForm');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');
// Cargar datos al formulario desde local storage
// Si se encuentra un valor, establecerlo como el valor de entrada
if (localStorage.getItem('nombre')) {
  nombreInput.value = localStorage.getItem('nombre');
}
if (localStorage.getItem('email')) {
  emailInput.value = localStorage.getItem('email');
}
if (localStorage.getItem('mensaje')) {
  mensajeInput.value = localStorage.getItem('mensaje');
}
// Escuchar envío del formulario
contactForm.addEventListener('submit', function (event) {
  // Evitar el envío por defecto
  event.preventDefault();
  // Guardar datos en local storage
  localStorage.setItem('nombre', nombreInput.value);
  localStorage.setItem('email', emailInput.value);
  localStorage.setItem('mensaje', mensajeInput.value);
   // Mostrar alerta de SweetAlert
   Swal.fire({
    icon: 'success', // Icono de éxito
    title: 'Guardado',
    text: 'Datos del formulario guardados.',
  });
  // Resetear formulario
  contactForm.reset();
});