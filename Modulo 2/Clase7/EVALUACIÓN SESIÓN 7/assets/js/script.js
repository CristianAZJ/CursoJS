function mostrarMenuPrincipal() {
    return prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas");
}

function mostrarMensajeError() {
    alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios.");
}

function manejarOpcionBoletasPagos() {
    var opcionBoletaPagos = prompt("Seleccione una opción\n1.- Ver Boleta\n2.- Pagar Cuenta");
    if (opcionBoletaPagos === "1") {
        alert("Haga clic aquí para descargar su boleta.");
    } else if (opcionBoletaPagos === "2") {
        alert("Haga clic aquí para pagar su cuenta.");
    } else {
        mostrarMensajeError();

    }
}

function manejarOpcionSenalLlamadas() {
    var opcionProblema = prompt("Seleccione una opción\n1.- Problemas con la señal\n2.- Problemas con las llamadas");
    if (opcionProblema === "1" || opcionProblema === "2") {
        var problema = prompt("A continuación escriba su solicitud:");
        alert("Su solicitud: " + problema);
    } else {
        mostrarMensajeError();

    }
}

function manejarOpcionOfertaComercial() {
    var opcionOferta = prompt("¡Mentel tiene una oferta comercial acorde a tus necesidades!\nPara conocer más información y ser asesorado personalmente por un ejecutivo, escribe 'Si' y un ejecutivo te llamará. De lo contrario, ingrese 'No'.");
    var respuesta = opcionOferta.trim().toLowerCase();
    if (respuesta === "si") {
        alert("Un ejecutivo contactará con usted.");
    } else if (respuesta === "no") {
        alert("Gracias por preferir nuestros servicios.");
    } else {
        mostrarMensajeError();
    }
}

function manejarOtrasConsultas() {
    var consulta = prompt("A continuación, escriba su consulta:");
    alert("Estimado usuario, su consulta: " + consulta);
}

function main() {
    var opcion = mostrarMenuPrincipal();
    
    switch (opcion) {
        case "1":
            manejarOpcionBoletasPagos();
            break;
        case "2":
            manejarOpcionSenalLlamadas();
            break;
        case "3":
             manejarOpcionOfertaComercial();
            break;
        case "4":
             manejarOtrasConsultas();
            break;
        default:
            mostrarMensajeError();
    }
}

main();
