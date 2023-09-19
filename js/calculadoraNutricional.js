// Función cargar datos JSON
async function cargarDatos() {
    try {
        // Solicitud fetch para llamar al archivo JSON
        const response = await fetch("./database/alimentos.json");
        const data = await response.json(); // Convertir respuesta a objetos 
        const select = document.getElementById('alimento'); // Lista desplegable (select)

        // Llenar el select con los alimentos del JSON
        data.forEach(alimento => {
            const option = document.createElement('option'); // Crear una nueva opción
            option.value = alimento.calorias; // Establecer valor calorías 
            option.textContent = alimento.nombre; // Establecer el nombre del alimento
            select.appendChild(option); // Agregar la opción al select
        });
    } catch (error) {
        console.error('Error al cargar los datos:', error); // Mostrar mensaje de error 
    }
}

// Función para calcular las calorías
function calcularCalorias() {
    const alimentoSelect = document.getElementById('alimento'); // Lista desplegable de alimentos
    const porcionInput = document.getElementById('porcion'); // Cantidad porcion en gramos
    const resultadoP = document.getElementById('resultadoCalculadora'); // Resultado
    const caloriasPorPorcion = parseFloat(alimentoSelect.value); // Calorías por porción
    const porcionGramos = parseFloat(porcionInput.value); // Cantidad en gramos

    // Verificar si los valores son válidos
    if (isNaN(caloriasPorPorcion) || isNaN(porcionGramos)) {
        resultadoP.textContent = 'Por favor, ingresar valores válidos.'; // Mensaje de error 
    } else {
        // Calcular el total de calorías
        const totalCalorias = (caloriasPorPorcion * porcionGramos) / 100;
        resultadoP.textContent = `Total de calorías: ${totalCalorias.toFixed(2)} kcal`; // Resultado 
    }

    resultadoP.style.animation = 'fadeIn 1s'; // Animación
    resultadoP.style.display = 'block'; // Estilo de visualización 
}

// Cargar los datos cuando se cargue la página
window.onload = cargarDatos;
