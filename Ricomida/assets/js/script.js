$(document).ready(function() {

    $("#sendMail").on("click", function() {
        // Cuando se haga clic en el botón con id "enviarCorreo"
        alert("El correo fue enviado correctamente...");
    });
});

$(document).ready(function() {

    $("#ingredientes").on("dblclick", function() {
        $(this).toggleClass("resaltarRojo");
    });

    // Manejar el evento dblclick para el título "PREPARACIÓN"
    $("#preparacion").on("dblclick", function() {
        $(this).toggleClass("resaltarRojo");
    });
});

$(document).ready(function() {

    $(".card-title").on("click", function() {
        // Seleccionar el contenido de la tarjeta asociada al título
        let contenidoTarjeta = $(this).siblings(".card-text");
        console.log(contenidoTarjeta);

        // Alternar la visibilidad del contenido utilizando toggle
        contenidoTarjeta.toggle();
    });
});