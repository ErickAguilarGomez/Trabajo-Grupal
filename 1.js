/*1. Determina el mayor de tres números:
Declara tres variables a, b y c con valores numéricos y utiliza condicionales
para determinar cuál de ellos es el mayor.
*/

let numeros = {}; //usamos objetos
let mayor;
for (let i = 1; i <= 3; i++) {
  let num = parseInt(prompt("Ingresa el número" + i + " :"));
  numeros["num" + i] = num;
}
if (numeros.num1 > numeros.num2 && numeros.num1 > numeros.num3) {
  mayor = numeros.num1;
} else if (numeros.num2 > numeros.num1 && numeros.num2 > numeros.num3) {
  mayor = numeros.num2;
} else if (numeros.num3 > numeros.num1 && numeros.num3 > numeros.num2) {
  mayor = numeros.num3;
}else{
  mayor = 'Los numeros son iguales';
}
console.log('El numero mayor es ' + mayor)
