$(document).ready(function () {
    // Validación del formulario
    $("#contactForm").validate({
        rules: {
            fullname: "required",
            email: {
                required: true,
                email: true
            },
            message: "required"
        },
        messages: {
            fullname: "Por favor, ingrese su nombre completo",
            email: {
                required: "Por favor, ingrese su correo electrónico",
                email: "Por favor, ingrese un correo electrónico válido"
            },
            message: "Por favor, ingrese su mensaje"
        },
        submitHandler: function (form) {
            // Envío del formulario (simulado)
            $("#successMessage").fadeIn();
            setTimeout(function () {
                $("#successMessage").fadeOut();
                form.reset();
            }, 3000);
            return false; // Evita que el formulario se envíe realmente
        }
    });
});
