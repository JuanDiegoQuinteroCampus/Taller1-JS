/* 9. N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros. */
let nombre=[];
let nombreM=[];
let marcas=[];
let marcaM=[];


let cont =Number (prompt("cuantos atletas han pasado a finales en salto triple?"));
for (let i = 0;i < cont; i++){
    nombre = (prompt(`${i+1} Ingrese el nombre del atleta finalista `))
    marcas = parseFloat(prompt(`${i+1} Ingrese la marca del atleta `))

    if(marcas>marcaM){
        marcaM=marcas
        nombreM=nombre
            }
    
    }
    console.log("El atleta: "+nombreM + " ganó la medalla de oro con una marca de "+marcaM);
    if(marcaM<15)
    {console.log("El atleta ganó pero no rompio el record de 15,50m");}
    else if(marcaM>15)
    {console.log("El atleta rompio el record asi que ha ganado 500 millones");}