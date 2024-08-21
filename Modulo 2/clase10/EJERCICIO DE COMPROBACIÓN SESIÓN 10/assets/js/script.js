$(document).ready(function() {
    // Mostrar y ocultar text2 al pasar el mouse sobre text1
    $('#text1').mouseenter(function() {
        $('#text2').show();
    }).mouseleave(function() {
        $('#text2').hide();
    });

    // Agrandar la caja y la imagen en caja2 al hacer clic y reducir al salir
    $('#caja2').click(function() {
        $(this).css({
            'width': '400px',
            'height': '200px' 
        });
        $(this).find('img').css({
            'width': '100%',
            'height': '100%'
        });
    }).mouseleave(function() {
        $(this).css({
            'width': '200px',
            'height': '100px'
        });
        $(this).find('img').css({
            'width': '100%',
            'height': '100%'
        });
    });

    // Agrandar el texto en text3 al hacer doble clic
    let toggle = false;
    $('#text3').dblclick(function() {
        if(toggle){
            $(this).css('font-size', '16px');
        }else{
            $(this).css('font-size', '32px');
        }
        toggle =!toggle;
    });
});
