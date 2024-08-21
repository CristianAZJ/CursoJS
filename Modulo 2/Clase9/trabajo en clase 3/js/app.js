
const changeColorButton = document.getElementById('changeColorButton');
const textContainer = document.getElementById('textContainer');


let colorToggle = false;

changeColorButton.addEventListener('click', function() {
 
    if (colorToggle) {
        const paragraph = textContainer.querySelector('p');
        textContainer.style.backgroundColor = 'lightblue';
        textContainer.style.color = 'red';
        paragraph.innerText = 'Este es un contenedor de texto. Cambia su color';
    } else {
        const paragraph = textContainer.querySelector('p');
        textContainer.style.backgroundColor = 'lightgreen';
        textContainer.style.color = 'black';
        paragraph.innerText = '¡El color ha cambiado y este es un nuevo texto!';
    }
    colorToggle = !colorToggle; 
});

const zoomableImages = document.querySelectorAll('.zoomable');

zoomableImages.forEach(function(image) {
    image.addEventListener('mouseover', function() {
        image.style.transform = 'scale(1.5)';
    });

    image.addEventListener('mouseout', function() {
        image.style.transform = 'scale(1)';
    });
});

const message = document.getElementById('message');

message.addEventListener('mouseover', function() {
    message.innerText = 'VAS MUY BIEN SIGUE ESTUDIANDO';
});

message.addEventListener('mouseout', function() {
    message.innerText = 'Pasa el mouse por aquí para el mensaje.';
});
