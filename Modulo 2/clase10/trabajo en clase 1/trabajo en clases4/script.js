$(document).ready(function() {

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        Swal.fire({
            title: '¡Enviado!',
            text: '¡Formulario enviado correctamente!',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
        
        $(this).css('background-color', '#dff0d8');
    });

    $('#contactForm').on('mouseover', function() {
        $(this).css('background-color', '#f0e68c');
    });

    $('#contactForm').on('mouseout', function() {
        $(this).css('background-color', '');
    });

    $('#nombre').on('input', function() {
        console.log($(this).val());
    });

    $('#mensaje').on('keydown', function(e) {
        console.log('Tecla presionada: ' + e.key);
    });

    // Efecto de zoom en las imágenes con jQuery
    $('.imagenes img').on('mouseover', function() {
        $(this).css('transform', 'scale(1.2)');
    });

    $('.imagenes img').on('mouseout', function() {
        $(this).css('transform', 'scale(1)');
    });
});
