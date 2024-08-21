// Mostrar y ocultar text2 al pasar el mouse sobre text1
document.getElementById('text1').addEventListener('mouseover', function() {
    document.getElementById('text2').style.display = 'block';
});

document.getElementById('text1').addEventListener('mouseout', function() {
    document.getElementById('text2').style.display = 'none';
});

// Agrandar y volver al tamaño inicial la imagen al hacer clic en caja2
document.getElementById('caja2').addEventListener('click', function() {
    let img = document.getElementById('img');
    img.style.width = img.style.width === '20%' ? '40%' : '20%';
});

document.getElementById('caja2').addEventListener('mouseout', function() {
    document.getElementById('img').style.width = '20%';
});

// Agrandar el texto al hacer doble clic en caja3
document.getElementById('caja3').addEventListener('dblclick', function() {
    this.style.fontSize = '2em';
});