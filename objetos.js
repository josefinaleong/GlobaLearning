/*Ejercicio 1: Pensemos que tenemos que hacer un juego. Y lo primero que necesitamos es que se puedan crear héroes en el juego.
Haga una función o una clase que nos sirva para crear nuestro objeto “heroe”
Debe tener las siguientes propiedades y valores. 
nombre - Valor por parametro o ‘heroe’
posicion - ‘00’
vida - 100
dano - 5
experiencia -0*/

/*
const newHeroe = (nombre,posicion,vida,dano,experiencia) => {
  const heroe = {
    heroeName : nombre,
    heroePosition : posicion,
    heroelife : vida,
    heroeHurt : dano,
    heroeExperience : experiencia,
    }
  return heroe

}


const superman = newHeroe("superman", 00,100,5,0)

console.log(superman)
*/


/*jercicio 2: Hubo una conferencia de programación hace poco y necesitamos saber quienes fueron las personas que estuvieron en el evento.
Sabemos que la información está guardada en un array de objetos.
Necesitamos saber cuántas personas de “Europa” asistieron
*/
/*
const list = [
  { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }];



  const newlist= list.map((item) => item.continent)

  console.log(newlist)


function contar (arr,origen){
  let counter = 0;
  for (let index = 0; index < arr.length; index++) {
    if(arr[index] == origen){
      counter ++
    }
  }
  console.log(`La cantidad de participanes proventientes de ${origen}, son ${counter}`)
}

contar (newlist,"Europe")

contar (newlist,"Asia")

contar(newlist,"Oceania")


/*Ejercicio 3: Teniendo en cuenta la misma conferencia anterior, necesitamos poder personalizar un mensaje para cada persona que asista al evento la próxima vez. Para eso, nuestra tarea es tener una función que devuelva un array donde cada posición tiene un objeto con una nueva propiedad de nombre “greeting” o “bienvenida”.



const list = [
  { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

function greeting(arr){
    arr.forEach( (item) => item.greeting = `Hola ${item.firstname} bienvenido, qué es lo que más te gusta de ${item.language} `)
    return arr;
  }

console.log(greeting(list))


/* Ejercicio 5: Teniendo en cuenta la misma conferencia anterior, necesitamos saber si van a haber programadores de cierto lenguaje para poder preparar contenido específico. Por lo tanto, necesitamos una function que nos devuelva “true” o “false” cuando le preguntemos por cierto lenguaje. Por ejemplo:*/
/*
const list = [
  { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

const newlist = list.map((item)=> (item.language))
console.log(newlist)

function lenguaje (arr,lenguaje){
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(element == lenguaje ){
      console.log(`Si hay participantes que saben el lenguaje ${lenguaje}`)
    } else{
      console.log(`No hay participantes que saben el lenguaje ${lenguaje}`)
    }    
  }
}

lenguaje(newlist, "Python")
*/

/*Ejercicio 6: Teniendo en cuenta la misma conferencia anterior, necesitamos saber el nombre y país de el primer desarrollador de cierto lenguaje que se haya inscripto.

const list1 = [
  { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
];


function findLanguage(arr,lenguaje){
  

}
*/
/*
return ('Python')==> Victoria from Puerto Rico was the first Python developer in the conference
return ('C#')==> There are no C# developers in the conference */


/* Ejercicio 1: Teniendo en cuenta la misma conferencia anterior, necesitamos saber si todas las personas registradas trabajan con el mismo lenguaje. Es decir, necesitamos que nuestra función devuelva True si todos los lenguajes son iguales, o que nos devuelva False si hay por lo menos uno que sea distinto */
/*const list = [
  { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Java' },
  { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Java' } 
];

function vCondition(array){
return array.every(item=> item.language === array[0].language)
}

console.log(vCondition(list))
*/

/*const newlist = list.map((item)=>(item.language))

console.log(newlist)

function sameLanguage(array){
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    for (let j= index + 1; j < array.length; j++){
      if(element == array[j] ){
        console.log("todos los lenguajes son iguales")
      } else {
        console.log("los lenguajes son distintos")
      }
    } 
  }
}

sameLanguage (newlist) 



/*Ejercicio 2: Teniendo en cuenta la misma conferencia anterior, necesitamos saber quienes son los desarrolladores con mayor edad.*/
/*


const list = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]; 

let mayorDeEdad = () => {
  return list.filter((item)  => item.age >40)
}

console.log(mayorDeEdad())

*/
/*

Ejercicio 3: Teniendo en cuenta la misma conferencia anterior, necesitamos crear nombre de usuario a cada persona registrada dependiendo del nombre y el año en el que nacieron. Este nombre de usuario tiene que agregarse como una nueva propiedad llamada “userName

const list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

let tiday = 

return ==> 
[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    userName: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    userName: 'nore2000' }
]

*/




/* Dado un array de objetos con una propiedad donde nos indican el tipo de comida, cree un contador que nos permita saber cuantos platos de cada tipo se debe pedir
*/
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetaria' },
];
​/*hago un cambio*/


/* return ==> { vegetarian: 2, standard: 1, vegan: 1 }
function retornaMeal(list1){
  const platos = {}
    list1.forEach(element => () )

} */