
const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 200 , descuento: false },
    { nombre: 'Teclado Vintage', precio: 250, descuento: false  },
    { nombre: 'TV 55 pulgadas', precio: 1080 , descuento: false },
    { nombre: 'Escritorio', precio: 255, descuento: true },
    { nombre: 'Cable USB', precio: 28 , descuento: false }
]


function descuento() {
    for (let index = 0; index < carrito.length; index++) {
        const taskObj = carrito[index];
        if (taskObj.descuento) {
            alert(`${taskObj.nombre} esto esta en oferta $${taskObj.precio}`);
            console.log(`${taskObj.nombre} esto esta en oferta $${taskObj.precio}`);
            // break; 
        } 
        else {
             console.log(`${taskObj.nombre} esto esta caro $${taskObj.precio}`);
        }
    }
}

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FIZZ BUZZ!!!');
        } else if (i % 3 === 0) {
            console.log('FIZZ');
        } else if (i % 5 === 0) {
            console.log('BUZZ');
        } else {
            console.log(i);
        }
    }
}


descuento();

fizzBuzz();