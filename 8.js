let largo1 = 5;
let ancho1 = 3;
let alto1 = 2;

let largo2 = 4;
let ancho2 = 4;
let alto2 = 3;

let largo3 = 6;
let ancho3 = 2;
let alto3 = 2;

let volumen1 = largo1 * ancho1 * alto1;
let volumen2 = largo2 * ancho2 * alto2;
let volumen3 = largo3 * ancho3 * alto3;

if (volumen1 > volumen2 && volumen1 > volumen3) {
    console.log("El paquete 1 tiene el mayor volumen: " + volumen1);
} else if (volumen2 > volumen1 && volumen2 > volumen3) {
    console.log("El paquete 2 tiene el mayor volumen: " + volumen2);
} else if (volumen3 > volumen1 && volumen3 > volumen2) {
    console.log("El paquete 3 tiene el mayor volumen: " + volumen3);
} else {
    console.log("Hay un empate en el mayor volumen.");
}