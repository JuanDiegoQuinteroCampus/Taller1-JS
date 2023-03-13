/* 10. Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR.*/
let lista=[];
let suma=0;
i=1;
 do{
    let x=Number(prompt(`${i++}Ingrese los datos`))
    if(x!=0)
    {lista.unshift(x)}
    else{
        break;
    }
 }while(true);
 console.log(lista);
 lista.forEach(function(a){suma += a;});
console.log(suma);
promedio=suma/lista.length
console.log(promedio);
console.log(lista.length);
console.log(Math.max(...lista));
console.log(Math.min(...lista));
