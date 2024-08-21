// Agrega tu hoja de estilo CSS
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = './assets/css/style.css'; 
document.head.appendChild(linkElement);

//  Cambiar el nombre de usuario y su rol
document.getElementById('username').textContent = 'Cristian Zúñiga'; 
document.getElementById('user-role').textContent = 'Rol: Administrador'; 

//  Actualizar la información personal
document.getElementById('email').textContent = 'juan.perez@example.com'; 
document.getElementById('phone').textContent = '+56912345678'; 
document.getElementById('address').textContent = '456 Calle Verdadera, Nueva Ciudad'; 



// // Actualizar la lista de publicaciones
// const publicaciones = document.querySelector('recent-posts');
// publicaciones.innerHTML = ''; 

// // Nuevos contactos
// const newPublicaciones = [
//     { name: 'Laura', relation: 'Amiga' },
//     { name: 'Carlos', relation: 'Colega' },
//     { name: 'Lucía', relation: 'Hermana' }
// ];

// // Agregar nuevos contactos a la lista
// for (let i = 0; i < newPublicaciones.length; i++) {
//     const li = document.createElement('li');
//     li.className = 'contact-item';
//     li.textContent = `Contacto: ${newPublicaciones[i].name} - Relación: ${newPublicaciones[i].relation}`;
//     contactList.appendChild(li);
// }




// Actualizar la lista de contactos
const contactList = document.querySelector('.contact-list');
contactList.innerHTML = ''; 

// Nuevos contactos
const newContacts = [
    { name: 'Laura', relation: 'Amiga' },
    { name: 'Carlos', relation: 'Colega' },
    { name: 'Lucía', relation: 'Hermana' }
];

// Agregar nuevos contactos a la lista
for (let i = 0; i < newContacts.length; i++) {
    const li = document.createElement('li');
    li.className = 'contact-item';
    li.textContent = `Contacto: ${newContacts[i].name} - Relación: ${newContacts[i].relation}`;
    contactList.appendChild(li);
}


// Modificar el pie de página
const footerTexts = document.querySelectorAll('.footer-text');
footerTexts[0].textContent = '© 2024 Empresa Cristian_AZJ';
footerTexts[1].textContent = 'Todos los derechos reservados';
