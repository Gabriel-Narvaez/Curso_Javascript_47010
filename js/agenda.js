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
  // Obtener los valores del formulario por ID
  const nombreTurno = document.getElementById('nombreTurno').value;
  const apellidoTurno = document.getElementById('apellidoTurno').value;
  const telefonoTurno = document.getElementById('telefonoTurno').value;
  const emailTurno = document.getElementById('emailTurno').value;
  const fechaTurno = document.getElementById('fechaTurno').value;
  const horaTurno = document.getElementById('horaTurno').value;

  // Verificar si todos los campos están llenos(operador ternario)
  const camposCompletos =
    nombreTurno && apellidoTurno && telefonoTurno && emailTurno && fechaTurno && horaTurno;

  // Crear instancia de Turno
  if (camposCompletos) {
    const turno = new Turno(nombreTurno, apellidoTurno, telefonoTurno, emailTurno, fechaTurno, horaTurno);
    const mensaje = `¡Turno agendado para ${turno.nombre} ${turno.apellido} el ${turno.fecha} a las ${turno.hora}!`;

    // Mostrar mensaje de éxito o error (operador ternario)
    const icono = camposCompletos ? 'success' : 'error';
    const titulo = camposCompletos ? 'Turno Agendado' : 'Error';
    const texto = camposCompletos ? mensaje : 'Ingresa datos válidos en todos los campos.';

    Swal.fire({
      icon: icono,
      title: titulo,
      text: texto,
    });

    // Mostrar el mensaje en el HTML 
    document.getElementById('mensajeTurno').textContent = camposCompletos ? mensaje : '';

    // Guardar los datos en sessionStorage 
    if (camposCompletos) {
      const turnoData = JSON.stringify(turno);
      sessionStorage.setItem('turnoData', turnoData);
    }
  }
}
