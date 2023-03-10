/* 3. Construir el algoritmo para determinar el voltaje de un
circuito a partir de la resistencia y la intensidad de corriente.
 */
let R = prompt("DIjite la resistencia de la corriente")
let I = prompt("DIjite la intensidad de la corriente")

resultado = parseFloat(R) * parseFloat(I)
console.log("El voltaje de un circuito a partir de la resistencia y la intensidad de corriente es de: ", resultado)
alert("El voltaje de un circuito a partir de la resistencia y la intensidad de corriente es de: " + resultado)
