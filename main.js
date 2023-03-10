/* 4. Construir el algoritmo que solicite el nombre y edad de 3personas y determine el nombre de la persona con mayor edad. */
let nombre1= prompt("Dijite el nombre de la primera persona")
let edad1= prompt("Dijite la edad de la primera persona")
let nombre2= prompt("Dijite el nombre de la segunda persona")
let edad2= prompt("Dijite la edad de la segunda persona")
let nombre3= prompt("Dijite el nombre de la tercera persona")
let edad3= prompt("Dijite la edad de la tercera persona")
console.log("la edad mayor es de",Math.max(edad1, edad2, edad3), "años");
if(edad1 > edad2 && edad1 > edad3)
{console.log(nombre1+" es la persona con mas edad")}
else if(edad2 > edad1 && edad2 > edad3)
{console.log(nombre2+" es la persona con mas edad")}
else if(edad3 > edad1 && edad3 > edad2)
{console.log(nombre3+" es la persona con mas edad")}
