document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
    
    // Muestra un mensaje de alerta
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");

    // Borra el contenido del formulario
    document.getElementById("contactForm").reset();
});
