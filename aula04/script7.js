const pessoa = {
  nome: "Maria",
  idade: 20,
  cidade: "Recife"
}

// Sem destructuring
const nome1 = pessoa.nome //Maria

// Com destructuring
const {nome, idade, cidade} = pessoa

console.log(nome1)
console.log(nome, idade, cidade,)