let edad = 45; 

if (edad >= 0 && edad <= 12) {
    console.log("La persona es un niño.");
} else if (edad >= 13 && edad <= 17) {
    console.log("La persona es un adolescente.");
} else if (edad >= 18 && edad <= 64) {
    console.log("La persona es un adulto.");
} else if (edad >= 65) {
    console.log("La persona es un anciano.");
} else {
    console.log("Edad no válida.");
}