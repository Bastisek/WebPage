$(document).ready(function () {
    // Configurar la validación del formulario
    $('#contactForm').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Por favor, ingresa tu nombre."
            },
            email: {
                required: "Por favor, ingresa tu correo electrónico.",
                email: "Por favor, ingresa un correo electrónico válido."
            },
            message: {
                required: "Por favor, ingresa tu mensaje."
            }
        },
        // Colocar el mensaje de error debajo de cada campo
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });
});

