
function menuRest() {
    alert("Bienvenido Supermecado JS");
    let opcion;
    let segundaOpcion;
    do {
        /*
        opción 1: menu cafeteria, opción2: menu supermercado, opción3: menu farmacia, opción 4: menu servicios
        */
        opcion = parseInt(prompt(
            "Seleccione que desea hacer:\n" +
            "1.- menu cafeteria\n" +
            "2.- menu supermercado\n" +
            "3.- menu farmacia\n" +
            "4.- menu servicios\n" +
            "5.- Salir"
        ));

        switch (opcion) {
            case 1:
                segundaOpcion = parseInt(prompt(
                    "1.- Té\n" +
                    "2.- Café\n"))

                if (segundaOpcion == 1) {
                    alert("Usted selecciono Té")
                }
                else if (segundaOpcion == 2){
                    alert("Usted selecciono Café")
                }
                else{
                    alert("Opción no válida. Por favor, intente nuevamente.")
                }
                break;
            case 2:
                segundaOpcion = parseInt(prompt(
                    "1.- Abarrotes\n" +
                    "2.- Carnes\n"))
                if (segundaOpcion == 1) {
                    alert("Usted selecciono Abarrotes")
                }
                else if(segundaOpcion == 2) {
                    alert("Usted selecciono Carnes")
                }
                else{
                    alert("Opción no válida. Por favor, intente nuevamente.")
                }
                break;
            case 3:
                segundaOpcion = parseInt(prompt(
                    "1.- Perfumeria\n" +
                    "2.- Drogas\n"))
                if (segundaOpcion == 1) {
                    alert("Usted selecciono Perfumeria")
                }
                else if (segundaOpcion == 2){
                    alert("Aló PDI")
                }
                else{
                    alert("Opción no válida. Por favor, intente nuevamente.")
                }
                break;
            case 4:
                segundaOpcion = parseInt(prompt(
                    "1.- Agua\n" +
                    "2.- Luz\n" +
                    "3.- Gas\n"))
                switch (segundaOpcion) {
                    case 1:
                        alert("Vamos a pagar el Agua.");
                        break;
                    case 2:
                        alert("Vamos a pagar la luz");
                        break;
                    case 3:
                        alert("Vamos a pagar el gas.");
                        break;
                    default:
                        alert("Opción no válida. Por favor, intente nuevamente.");
                }
                break;
            case 5:
                alert("Gracias. Hasta luego!");
                break;
            default:
                alert("Opción no válida. Por favor, intente nuevamente.");
        }
    } while (opcion !== 5);

}


let continuar = true;
while (continuar) {
    menuRest();
    continuar = confirm("¿Desea Pedir algo mas?");
}

alert("Gracias");
