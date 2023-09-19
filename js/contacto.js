// Formulario de contacto 
// Obtener elementos del formulario por ID
const contactForm = document.getElementById('contactForm');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');

// Cargar datos al formulario desde local storage (operadores ternarios)
nombreInput.value = localStorage.getItem('nombre') || '';
emailInput.value = localStorage.getItem('email') || '';
mensajeInput.value = localStorage.getItem('mensaje') || '';

// Escuchar envío del formulario
contactForm.addEventListener('submit', function (event) {
  // Evitar el envío por defecto
  event.preventDefault();

  // Guardar datos en local storage
  localStorage.setItem('nombre', nombreInput.value);
  localStorage.setItem('email', emailInput.value);
  localStorage.setItem('mensaje', mensajeInput.value);

  // Alerta de SweetAlert
  Swal.fire({
    icon: 'success', // Icono de éxito
    title: 'Guardado',
    text: 'Datos del formulario guardados.',
  });

  // Reset del formulario
  contactForm.reset();
});
