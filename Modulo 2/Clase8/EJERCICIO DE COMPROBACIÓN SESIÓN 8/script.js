let opcion;

do {
    opcion = parseInt(prompt(
        "Seleccione una opción:\n" +
        "1. Opción 1\n" +
        "2. Opción 2\n" +
        "3. Opción 3\n" +
        "4. Opción 4\n" +
        "5. Salir"
    ));

    switch(opcion) {
        case 1:
            alert("Has seleccionado la Opción 1");
            break;
        case 2:
            alert("Has seleccionado la Opción 2");
            break;
        case 3:
            alert("Has seleccionado la Opción 3");
            break;
        case 4:
            alert("Has seleccionado la Opción 4");
            break;
        case 5:
            alert("Saliendo del menú...");
            break;
        default:
            alert("Opción no válida. Intente nuevamente.");
    }
} while (opcion !== 5);