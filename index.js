// function imprimeDado(dado){
//    console.log(dado())
// }

// // imprimeDado("ok")
// // imprimeDado(11)
// // imprimeDado([12,12,12])
// // imprimeDado(true)
// // imprimeDado({nome:"fsulano", idade:"11"})
// imprimeDado(function (){
//    return 'Hello World!'
// })



//    setTimeout(()=> {
//    console.log("Cool man!!")
//    console.log("Execute everything here, in 1 second")
// }, 1000);


// const https = require ("https")

// const API = 'https://jsonplaceholder.typicode.com/todos?_limit=2'

// https.get(API, res =>{
//    console.log(res.statusCode)
//    console.log({res})
// })
// console.log("rodando")



// fetch('https://jsonplaceholder.typicode.com/todos?_limit=2')
// .then(response => response.json())
// .then(json => console.log(json))


const promessa = new Promise ((resolve, reject)=>{
   return resolve("O carro chegou!!").catch((err) => reject)
})

console.log(promessa)
