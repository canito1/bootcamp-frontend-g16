console.log('Hello world from index.js!')

// Esto es un comentario en un línea

/* Esto
es 
un
comentario
de
múltiples
líneas
*/

// TIPOS DE DATOS

// PRIMITIVOS: Number, String, Boolean (true, false), undefined

// NUMBER
const numero1 = 20
const numero2 = 20.50
const numero3 = -36

console.log(numero1)
console.log(numero2)
console.log(numero3)

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

// STRING o cadena de texto
const alumna = 'Claudia'
const alumno = "Marco"
const numero4 = "200"
const numero5 = 200

console.log(typeof alumna)
console.log(typeof alumno)
console.log(typeof numero4)
console.log(typeof numero5)

// BOOLEAN -> false o true

const tieneDescuento = true

console.log(tieneDescuento)
console.log(typeof tieneDescuento)

// UNDEFINED

let nombre

console.log(nombre)
console.log(typeof nombre)

// NULL -> Es un object

let apellido = null

console.log(apellido)
console.log(typeof apellido)

// Object
// Funtion
// BigInt
// Symbol


// VARIABLES Y CONSTANSTANTES

// ECMASCRIPT 5 === ES5
// ECMASCRIPT 6 === ES6

// var -> ES5 (Forma de declarar una variable)
var nombreDeMiVariable = 'un valor'

// CONST -> ES6 (El uso de const es lo recomendado)

// * No podemos reasignar su valor

const edad = 55
const _edad = 25
const edadDeMiHijo = 15

// edad = 33 // Uncaught TypeError: Assignment to constant variable.

console.log(edad)

// LET -> ES6 (El uso de let es lo recomendado)

// * Sí podemos reasignar su valor

let edad2 = 35
edad2 = 36
edad2 = 22

console.log(edad2)

// Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'
const language = prompt("Ingrese su idioma:"); // Se solicita al usuario que ingrese su idioma

if (language === "español") {
  console.log("Hola"); // Si el idioma es español, se muestra 'Hola'
} else if (language === "inglés") {
  console.log("Hello"); // Si el idioma es inglés, se muestra 'Hello'
} else if (language === "aimara") {
  console.log("kamisaraki"); // Si el idioma es aimara, se muestra 'kamisaraki'
} else {
  console.log("Lo siento, no reconozco ese idioma."); // Si el idioma no es reconocido, se muestra un mensaje de error
}

// Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      return "fizzbuzz"; // Si el número es divisible entre 3 y 5, se devuelve 'fizzbuzz'
    } else if (num % 3 === 0) {
      return "fizz"; // Si el número es divisible entre 3, se devuelve 'fizz'
    } else if (num % 5 === 0) {
      return "buzz"; // Si el número es divisible entre 5, se devuelve 'buzz'
    } else {
      return num; // De lo contrario, se devuelve el mismo número
    }
  }
  
  console.log(fizzBuzz(15)); // Devuelve 'fizzbuzz'
  console.log(fizzBuzz(9)); // Devuelve 'fizz'
  console.log(fizzBuzz(10)); // Devuelve 'buzz'
  console.log(fizzBuzz(7)); // Devuelve 7

  // REtornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1
function esPrimo(num) {
    if (num < 2) {
      return false; // Si el número es menor que 2, no es primo
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false; // Si el número es divisible por algún número entre 2 y el número - 1, no es primo
      }
    }
    return true; // Si el número no es divisible por ningún número entre 2 y el número - 1, es primo
  }
  
  console.log(esPrimo(7)); // Devuelve true
  console.log(esPrimo(12)); // Devuelve false
  console.log(esPrimo(23)); // Devuelve true
  console.log(esPrimo(1)); // Devuelve false

  // Devolver un valor que se incremente de dos en dos y devuelva los menores a 10

  let num = 0;
while (num < 10) {
  console.log(num);
  num += 2; // Se incrementa el valor de num en 2 en cada iteración
}

