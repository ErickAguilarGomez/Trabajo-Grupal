/*2. Determina el rango de un número:
Declara una variable número con un valor numérico y utiliza condicionales para
determinar en qué rango se encuentra.
*/

let num = parseInt(
  prompt("Escriba un número de 0 - 100  para encontrar el cuartil :")
);
/* Usaremos true en switch por que la expresión a evaluar dentro de la sentencia
 no solo es un valor sino también una expresión en sí. */
switch (true) {
  case num <= 25:
    console.log("El numero " + num + " se encuentra en el primer cuartil");
    break;
  case num <= 50:
    console.log("El numero " + num + " se encuentra en el segundo cuartil");
    break;
  case num <= 75:
    console.log("El numero " + num + " se encuentra en el tercer cuartil");
    break;
  case num <= 100:
    console.log("El numero " + num + " se encuentra en el cuarto cuartil");
    break;
  default:
    console.log("Fuera de rango");
    break;
}
