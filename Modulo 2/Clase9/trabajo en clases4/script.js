// Interactividad del formulario con SweetAlert
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Usando SweetAlert para mostrar el mensaje
    Swal.fire({
        title: '¡Enviado!',
        text: '¡Formulario enviado correctamente!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
    
    this.style.backgroundColor = '#dff0d8';
});

document.getElementById('contactForm').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#f0e68c';
});

document.getElementById('contactForm').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

document.getElementById('nombre').addEventListener('input', function() {
    console.log(this.value);
});

document.getElementById('mensaje').addEventListener('keydown', function(e) {
    console.log('Tecla presionada: ' + e.key);
});

// Efecto de zoom en las imágenes
document.querySelectorAll('.imagenes img').forEach(function(img) {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
    });

    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
