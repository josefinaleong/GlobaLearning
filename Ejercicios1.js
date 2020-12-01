/* 1) Hacer una función que siepmre elimine el primer elemento del arreglo*/
    /*Funcion que siempre elimine el array que se le pasa

function deleteFirstElement (array){
    array.splice(0,1)
    console.log(array)
}
deleteFirstElement([1,2,3,4])
deleteFirstElement([2,3,4])
*/

/* 2) Hacer una función que solo reciba arreglos con más de 5 elementos y luego elimine los últimos tres

function arreglo(array){
    if ( array.length >= 5 ){
        for (let i = 0; i < 3 ; i++){
            array.pop()
        }
        console.log(array)
    } else {
        console.log("El array no tiene más de 5 elementos")
    }
}

arreglo([1,2,3,4,5,6,7,8,9,10])
arreglo([1,2,3,4])
*/

/* 3) Teniendo un arreglo númerico, tenemos que sumarle un número (por párametro) a cada elemento de nuestro arreglo

let arr = [0,1,2,3,4,5,6]

function sumarUnParametro (numero){
    let newarr = arr.map(item => item + numero)
    console.log(newarr)
}   

sumarUnParametro(3)
*/

/* 4) Haga una función que reciba un número y retorne un arreglo que tenga el número del tamaño recibido -1(0 a n-1)    
let array = new Array()

function crearArray (tamaño){
    for (let i = 0; i < tamaño ; i++){
        array.push(i)
    } 
    console.log(array)
}

crearArray(10)

*/

/* 5) Hay un arreglo con varios números donde todos son iguales excepto uno. Haga una función que lo identifique 


function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  }

console.log (findUniq([1,1,1,2,1,1,1,1]))
*/

/* 6) Dado un arreglo de números enteros, encuentre la menor suma posible entre ellos */

/* function sumaMin (arr){
    const  min1 = Math.min.apply(null,arr)
    console.log(min1)
    const newarr1= arr.filter(item => (item != min1))
    console.log(newarr1)
    const min2 = Math.min.apply(null,newarr1)
    console.log(min2)
    let suma = min1 + min2
    console.log(suma) 
} */


let arr = [250,30,1,15,5]
arr.sort()
console.log(arr)
const suma = arr[0] + arr[1]


/* 7) Dado un arreglo de números enteros, encuentre el mayor producto posible dado a partir de números adyacentes



function mayorProducto(arr){
  let productos = []
  for (let i = 0; i < arr.length-1; i++){
        productos.push(arr[i]*arr[i+1])
    }
    console.log(productos)
    mayor = Math.max.apply(null,productos)
    console.log(mayor)
}

mayorProducto([9,5,10,2,24,-1])

*/

