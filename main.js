/* 7. Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura. */
let nombrea=[];
let precio=0;
let cantidad=0;

let cont =Number (prompt("cuantos articulos desea comprar?"));
for (let i = 0;i < cont; i++){
    nombrea = (prompt(`${i+1} ingrese el nombre del articulo `))
    let valor = parseFloat(prompt(`${i+1} ingrese el precio del articulo `))

    
    cantidad++
    precio += valor

        
    }
    console.log("Debe pagar "+ precio+ " por " + cantidad+ " de articulos");