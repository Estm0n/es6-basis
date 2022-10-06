//importar commonjs
const colors = require ('colors');
const materias = require ('./materias')

//recorrido del arreglo
materias.forEach((materias)=>{
    if(materias.instructor === 'Cristian Buitrago'){
    console.log(`nombre: ${materias.nombre}`.bgBlue.grey)
    }
})

//map: metodo de arreglos en es6
//crear un arreglo a partir de un

const profesores = materias.map((materias)=>{
    return materias.instructor
})

//find: localizar elementos de un arreglo 
//  que cumplan cierta condición

const PHP = materias.find((materias)=> {
    return materias.instructor === "Cristian Buitrago"
})

console.log(PHP)

/*/importar el componente sumar
const sumar = require("./sumar")
const estudiante = require('./estudiante')
var colors = require('colors')


//tipos de variable:
//let: variables
let a = 10
//const: constantes 
const b = 20

//desestructurar objeto:
let { first_name , last_name } = estudiante

console.log(`nombre: ${first_name}`.bgMagenta)
console.log(`apellido: ${last_name}`.bgMagenta)*/