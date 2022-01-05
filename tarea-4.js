//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let numbers = document.querySelectorAll("li")

function convertArray(lista) {
    let generatedArray1 = []
    for(let i = 0; i < lista.length; i++) {
        generatedArray1.push(Number((lista[i].innerText)))
    }
    return generatedArray1
}
let generatedArray = convertArray(numbers)

let average = 0

for (let i = 0; i < generatedArray.length; i++) {
    average = average + generatedArray[i]
}


let smallestNumber

function smallNumber(array){
  smallestNumber = array[0]
  for(let i = 0; i <= array.length; i++){
      if(array[i] < smallestNumber){
          smallestNumber = array[i]
      }
  }
  return smallestNumber
}



smallestNumber = smallNumber(generatedArray)

let biggestNumber

function bigNumber(array) {
    biggestNumber = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > biggestNumber) {
        biggestNumber = array[i];
      }
    }
    return biggestNumber;
}

biggestNumber = bigNumber(generatedArray)




function numeroMasRepetido(array) {
    let contadorRepeticiones = 1;
    let apariciones = 0;
    let masRepetido;
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[i] === array[j]) {
          apariciones++;
        }
        if (apariciones > contadorRepeticiones) {
          contadorRepeticiones = apariciones;
          masRepetido = array[i];
        }
      }
      apariciones = 0;
    }
    return masRepetido;
}

masRepetido = numeroMasRepetido(generatedArray)







const totalAverage = average / generatedArray.length

const $average = "El promedio es " + totalAverage
document.querySelector("#promedio").innerText = $average

let $smallestNumber = "El número más pequeño es " + smallestNumber
document.querySelector("#numero-menor").innerText = $smallestNumber
 
let $biggestNumber = "El número más grande es " + biggestNumber
document.querySelector("#numero-mayor").innerText = $biggestNumber

const $frequentNumber = "El número más frecuente es " + masRepetido
document.querySelector("#numero-frecuente").innerText = $frequentNumber
