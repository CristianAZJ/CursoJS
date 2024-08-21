// Definimos los clientes
const clientes = [
    { nombre: "Juan", identificador: "123", clave: "abc", saldo: 500 },
    { nombre: "Maria", identificador: "456", clave: "def", saldo: 1000 },
    { nombre: "Luis", identificador: "789", clave: "ghi", saldo: 750 }
];

// Función para encontrar al cliente
function validarCliente(id, clave) {
    return clientes.find(cliente => cliente.identificador === id && cliente.clave === clave);
}

// Función principal del cajero automático
function cajeroAutomatico() {
    let id = prompt("Ingrese su identificador:");
    let clave = prompt("Ingrese su clave:");

    let cliente = validarCliente(id, clave);

    if (cliente) {
        alert("Bienvenido " + cliente.nombre);
        let opcion;
        do {
            opcion = parseInt(prompt(
                "Seleccione que desea hacer:\n" +
                "1.- Ver saldo\n" +
                "2.- Realizar giro\n" +
                "3.- Realizar depósito\n" +
                "4.- Salir"
            ));

            switch (opcion) {
                case 1:
                    alert("Su saldo actual es: $" + cliente.saldo);
                    break;
                case 2:
                    let montoGiro = parseFloat(prompt("Su saldo actual es: " + cliente.saldo + "\nIngrese el monto que desea girar:"));
                    if (montoGiro > cliente.saldo) {
                        alert("No tiene suficiente saldo para realizar el giro.");
                    } else {
                        cliente.saldo -= montoGiro;
                        alert("Giro realizado. Su nuevo saldo es: $" + cliente.saldo);
                    }
                    break;
                case 3:
                    let montoDeposito = parseFloat(prompt("Su saldo actual es: " + cliente.saldo + "\nIngrese monto que desea depositar:"));
                    cliente.saldo += montoDeposito;
                    alert("Depósito realizado. Su nuevo saldo es: $" + cliente.saldo);
                    break;
                case 4:
                    alert("Gracias por usar nuestro cajero. Hasta luego!");
                    break;
                default:
                    alert("Opción no válida. Por favor, intente nuevamente.");
            }
        } while (opcion !== 4);
    } else {
        alert("Identificador o clave incorrectos. Intente nuevamente.");
    }
}

// Bucle para ejecutar el cajero automático repetidamente
let continuar = true;
while (continuar) {
    cajeroAutomatico();
    continuar = confirm("¿Desea realizar otra operación con el cajero automático?");
}

alert("Sistema de cajero automático finalizado.");
