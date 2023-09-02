// Agenda para turnos (definicion de clase y constructor)
class Turno {
    constructor(nombre, apellido, telefono, email, fecha, hora) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.telefono = telefono;
      this.email = email;
      this.fecha = fecha;
      this.hora = hora;
    }
  }  
// Funcion para agendar turno
function agendarTurno() {
    // Ingreso de valores del formulario por ID
    const nombreTurno = document.getElementById('nombreTurno').value;
    const apellidoTurno = document.getElementById('apellidoTurno').value;
    const telefonoTurno = document.getElementById('telefonoTurno').value;
    const emailTurno = document.getElementById('emailTurno').value;
    const fechaTurno = document.getElementById('fechaTurno').value;
    const horaTurno = document.getElementById('horaTurno').value;

    // Verificar si todos los campos están llenos
    if (
        nombreTurno &&
        apellidoTurno &&
        telefonoTurno &&
        emailTurno &&
        fechaTurno &&
        horaTurno
    ) {
        // Crear una instancia de Turno
        const turno = new Turno(nombreTurno, apellidoTurno, telefonoTurno, emailTurno, fechaTurno, horaTurno);
        const mensaje = `¡Turno agendado para ${turno.nombre} ${turno.apellido} el ${turno.fecha} a las ${turno.hora}!`;
         // Mensaje de éxito con SweetAlert
         Swal.fire({
            icon: 'success', // Icono de éxito
            title: 'Turno Agendado',
            text: mensaje,
          });
        // Mostrar el mensaje en el HTML
        document.getElementById('mensajeTurno').textContent = mensaje;

        // Guardar los datos en sessionStorage
        // Convertir objeto en cadena JSON
        const turnoData = JSON.stringify(turno);
        sessionStorage.setItem('turnoData', turnoData);
    } else {
        // Mensaje de error con SweetAlert
        Swal.fire({
            icon: 'error', // Icono de error
            title: 'Error',
            text: 'Ingresa datos válidos en todos los campos.',
          });
        document.getElementById('mensajeTurno').textContent = "Ingresa datos válidos en todos los campos.";
    }
}
// Escuchar el evento para verificar si hay datos cargados de turno en sessionStorage
document.addEventListener('DOMContentLoaded', function() {
    const turnoData = sessionStorage.getItem('turnoData');
    if (turnoData) {
        const turno = JSON.parse(turnoData);
        const mensaje = `Turno agendado para ${turno.nombre} ${turno.apellido} el ${turno.fecha} a las ${turno.hora}!`;
        document.getElementById('mensajeTurno').textContent = mensaje;
    }
});
