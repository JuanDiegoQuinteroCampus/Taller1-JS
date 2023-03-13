/* 6. Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres. */

let nombre=[];
let nombreM=[];
let nombrem=[];
let nota=0;
let notai=99999;
let notaM=0;
let sexo = [];
let sexoF=0;
let sexoM=0;
let cont =Number (prompt("cuantos datos desea ingresa?"));
for (let i = 0;i < cont; i++){
    nombre = (prompt(`${i+1} ingrese el nombre del estudiante `))
    nota=parseInt(prompt(`${i+1} ingrese la nota definitiva `))
    if(nota>notaM){
    notaM=nota
    nombreM=nombre
        }
    if(nota<notai){
    notai=nota
    nombrem=nombre
        }
    sexo = (prompt(`${i+1} ingrese el sexo de la persona (M-F, recuerde en mayuscula)`))
    if(sexo=="F")
        {sexoF += 1}
    else if(sexo=="M")
        {sexoM += 1}
}
console.log("El estudiante que tuvo la mayor nota fue "+ nombreM + " con una nota de " + notaM);
console.log("El estudiante que tuvo la menor nota fue "+ nombrem + " con una nota de " + notai);
console.log(sexoF + " Eran Mujeres ");
console.log(sexoM + " Eran Hombres macho pecho pelaos");

