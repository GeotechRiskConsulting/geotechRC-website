// Función para cargar el header
function loadHeader() {
    fetch('../includes/header.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del header en el elemento con id "header-placeholder"
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error cargando el header:', error));
}

// Llamar a la función cuando la página se cargue
window.onload = loadHeader;
