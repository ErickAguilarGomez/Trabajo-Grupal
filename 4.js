/*4. Comparación de dos números:
Declara dos variables a y b con valores numéricos y utiliza condicionales para
comparar si a es mayor, menor o igual a b*/
let num1 = parseInt(prompt('Ingresa el primer número: '));
let num2 = parseInt(prompt('Ingresa el segundo número: '));
if (num1>num2) {
  console.log(`El número ${num1} es mayor`);
} else if (num1<num2) {
  console.log(`El número ${num2} es mayor`);
} else {
  console.log('Los numeros son iguales')
}
