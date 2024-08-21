// Solicitar el ingreso de dos números al usuario
var numero1 = parseInt(prompt("Ingrese el primer número:"));
var numero2 = parseInt(prompt("Ingrese el segundo número:"));

// Comparar los números y mostrar el resultado
if (numero1 > numero2) {
    alert("El número " + numero1 + " es mayor que " + numero2);
} else if (numero1 < numero2) {
    alert("El número " + numero2 + " es mayor que " + numero1);
} else {
    alert("Ambos números son iguales.");
}
