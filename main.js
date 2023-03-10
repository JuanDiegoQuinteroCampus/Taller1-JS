/* 5. Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
diferencia, en caso contrario, informar el producto y la
división del primero respecto al segundo. */

let num1 = prompt("Dijite un número");
let num2 = prompt("Dijite otro número adicional");

Suma = parseFloat(num1) + parseFloat(num2)
Resta= parseFloat(num1) - parseFloat(num2)
Producto = parseFloat(num1) * parseFloat(num2)
División = parseFloat(num1) / parseFloat(num2)

if (num1 > num2)
{console.log("la suma de estos dos numeros es: " + Suma,". " + "Y la resta de estos dos números es: " + Resta);}

else if(num1 < num2)
{console.log("El producto de estos dos numeros es: " + Producto,". " + "Y la división de estos dos números es: " + División);}
