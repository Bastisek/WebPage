document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
    
    // Muestra el mensaje de confirmación
    document.getElementById("confirmation").style.display = "block";
    
    // Borra el contenido del formulario
    document.getElementById("contactForm").reset();

    // Espera 3 segundos antes de ocultar el mensaje de confirmación
    setTimeout(function() {
        document.getElementById("confirmation").style.display = "none";
    }, 3000);
});
