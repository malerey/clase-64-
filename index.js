// Metodos de array

// Son metodos que reciben como parametro una funcion
// Y esa funcion se le va a aplicar a todos los miembros del array
// Casi todos reciben como parametros en esa funcion cada uno de los elementos,
// el indice, y el array

// MAP

// Retorna un array nuevo, cuyos elementos son lo que retorna la funcion-parametro

// const edades = [23, 24, 6, 8, 42, 23]

// const nuevoArray = edades.map((edad) => {
//   console.log(edad)
//   return edad + 10
// })

// console.log(nuevoArray)

// FIND

// Retorna el primer elemento que cumpla una condicion
// La condicion debe ser *retornada* en la funcion parametro
// Si no hay ninguno que cumpla la condicion, retorna undefined

// const edades = [23, 24, 6, 8, 42, 23]
// const nombres = ["maca", "sol", "caro", "rosy", "flor"]

// const mayorA18 = edades.find((edad) => {
//   return edad > 18
// })

// const empiezaConS = nombres.find((nombre) => {
//   return nombre[0] === "S"
// })
// console.log(mayorA18)
// console.log(empiezaConF)

// FILTER
// Retorna todos los elementos que cumplan una condicion (en forma de array)
// La condicion debe ser *retornada* en la funcion parametro
// Si no hay ninguno que cumpla la condicion, retorna un array vacio

// const edades = [23, 24, 6, 8, 42, 23]
// const nombres = ["maca", "sol", "caro", "rosy", "flor"]

// const mayorA18 = edades.filter((edad) => {
//   return edad > 100
// })

// console.log(mayorA18)

// EVERY

// Recibe una funcion como parametro
// Lo que retorne esa funcion es una condicion que se le aplicara a todos los miembrs del array
// Si la respuesta para todos es true, devuelve true. Si la respuesta al menos para uno es false, devuelve false.

// const nombres = ["maca", "sol", "caro", "rosy", "flor"]

// const tienenMenosDeSeisLetras = nombres.every((nombre) => {
//   return nombre.length < 6
// })

// console.log(tienenMenosDeSeisLetras)

// SOME
// Recibe una funcion como parametro
// Lo que retorne esa funcion es una condicion que se le aplicara a todos los miembrs del array
// Si la respuesta para al menos 1 es true, devuelve true.
// Si la respuesta para todos es false, devuelve false.

// const nombres = ["maca", "sol", "caro", "rosy", "flor"]

// const hayAlgunoDeTresLetras = nombres.some((nombre) => {
//   return nombre.length === 4
// })

// console.log(hayAlgunoDeTresLetras)

// ARRAYS DE OBJETOS

// const alumnas = [
//   {
//     nombre: 'maca',
//     edad: 22,
//   },
//   {
//     nombre: 'marian',
//     edad: 27,
//   },
//   {
//     nombre: 'rosy',
//     edad: 25,
//   },
//   {
//     nombre: 'caro',
//     edad: 28,
//   },
//   { nombre: 'angie', edad: 38 },
//   {nombre: 'dani', edad: 24}
// ];

// // el array
// console.log(alumnas)
// // el primer elemento dentro de ese array (un objeto)
// console.log(alumnas[0])
// // la propiedad nombre dentro del primer elemento del array
// console.log(alumnas[0].nombre)

// Crear un array nuevo con todas las alumnas que tengan menos de 25 años
// Guardar en una variable a la primera alumna cuyo nombre tenga mas de 4 letras
// Crear un booleano que diga si todas las alumnas tienen mas de 18 años
// Crear un booleano que diga si al menos una alumna tiene mas de 30 años


// Concatenamiento de metodos

const alumnas = ["Maca", "Sol", "Flor", "Angie", "Marian"]

const masDeCincoLetras = alumnas.map((alumna) => {
  return alumna.toUpperCase()
})
.filter((alumna) => {
  return alumna.length >= 4
})
.some((alumna) => {
  return alumna.length >=5
})

