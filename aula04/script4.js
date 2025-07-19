const animais1 = ["gato","cachorro","cobra"]
const animais2 = ["pato","girafa", "elefante"]

// concat: Juntar os dois arrays
const todosAnimais = animais1.concat(animais2)
console.log("Todos os Animais CONCAT:", todosAnimais)


// join: Juntar os elementos em uma string
console.log("Todos os Animais JOIN:", todosAnimais.join(','))


// // Slice
// const animaisMeio = animais.slice(1, 4) //do indice 1 até ANTES do 4
// console.log("Slice: ",animaisMeio)

// // Includes: verifica se o elemento buscado existe no array
// console.log("Includes PATO: ", animais.includes("pato"))
// console.log("Includes ELEFANTE: ", animais.includes("elefante"))

//  IndexOf
// console.log("IndexOf PATO: ", animais.indexOf("gato"))
// console.log("IndexOf ELEFANTE: ", animais.indexOf("elefante"))