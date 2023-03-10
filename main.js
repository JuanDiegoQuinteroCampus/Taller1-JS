/*1. Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado"*/

let nota1 = prompt("Ingrese la primera nota del alumno");
console.log(nota1);
let nota2 = prompt("Ingrese la segunda nota del alumno");
console.log(nota2);
let nota3 = prompt("Ingrese la tercera nota del alumno");
console.log(nota3);

 let Suma = parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3);
 console.log(nota1,"+",nota2,"+",nota3,"/ 3");
 let Promedio = Suma / 3;
 console.log(Promedio);
 
let resultado = Promedio <= 3.9;

let e1 = ("Su promedio es menor a 3.9; Estudie")
let b1 = ("Su promedio es mayor a 3.9; Becado")

if (resultado == false)
{console.log(b1);}
else if (resultado == true)
{console.log(e1);}


