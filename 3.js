/*3. Calculadora simple:
Declara tres variables: a (un número), operador (un operador aritmético como
cadena), y b (otro número). Utiliza condicionales para realizar la operación
correspondiente y muestra el resultado.*/
let num1 = parseFloat(prompt("Escribe el primer número: "));
let operador = prompt("Escribe un operador (+, -, *, /): ");
let num2 = parseFloat(prompt("Escribe el primer número: "));
switch (operador) {
  case "+":
    console.log(`La suma de ${num1}+${num2} es ${num1 + num2}`);
    break;
  case "-":
    console.log(`La resta de ${num1}-${num2} es ${num1 - num2}`);
    break;
  case "*":
    console.log(`La multiplicación de ${num1}*${num2} es ${num1 * num2}`);
    break;
  case "/":
    console.log(`La división de ${num1}/${num2} es ${num1 / num2}`);
    break;
  default:
    console.log("El operador es incorrecto");
    break;
}
