/* function envioFormulario(){
    alert("¡Formulario enviado correctamente!")
}

function cambiarColor(){
 
    let colorFondo = aplicarColorAleatorio();
    console.log(colorFondo)
    document.getElementById('sectionForm').style.background = colorFondo;

}

function restaurarColor() {
    document.getElementById('sectionForm').style.background = 'brown'
}

function aplicarColorAleatorio() {
    // Generar un color aleatorio en formato hexadecimal
    const colorAleatorio = Math.floor(Math.random()*16777215).toString(16);
    
    // Asegurarse de que el color tenga 6 dígitos
    const colorHex = "#" + ("000000" + colorAleatorio).slice(-6);
    
    // Aplicar el color al fondo del contenedor
    document.getElementById('sectionForm').style.background = colorHex;
}
const captura = document.getElementById ('inputNombre');

    captura.addEventListener('input',(e)=>{
        console.log(e.target.value);
    })

    document.addEventListener('DOMContentLoaded', function() {
        var imagenes = document.querySelectorAll('.imagen');

        imagenes.forEach(function(imagen) {
            imagen.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.5)';
            });

            imagen.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    });

 */

/* J Q U E R Y */

$(document).ready(function () {
    $('#form1').on('submit', function (e) {
        e.preventDefault();
        Swal.fire({
            title: '¡Enviado!',
            text: '¡Formulario enviado correctamente!',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    })

    $('#sectionForm').on('mouseover', function () {

        let colorFondo = aplicarColorAleatorio();
        $(this).css('background', colorFondo);
    });

    $('#sectionForm').on('mouseout', function () {
        $(this).css('background', 'brown');
    });
})

function aplicarColorAleatorio()  {
    const colorAleatorio = Math.floor(Math.random() * 16777215).toString(16);
    const colorHex = "#" + ("000000" + colorAleatorio).slice(-6);
    return colorHex;

}