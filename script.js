/* Variáveis

    - let - Pode alterar o valor da variável, mas não pode ser redeclarada no mesmo escopo.
    - const - Não pode alterar o valor da variável e não pode ser redeclarada no mesmo escopo.
    - var - DESCONTINUADO - não deve ser usado.

*/

let numeroDeAlunosDaTurma = 30;
numeroDeAlunosDaTurma = 35;

console.log(numeroDeAlunosDaTurma)

/* Strings - Textos

Aspas simples ('): Servem para textos normais. Ajuda se o texto precisa de aspas duplas dentro.
Aspas duplas ("): Servem igual às simples. Ajuda se o texto precisa de aspas simples dentro.
Crase (`): Permite pular linhas e colocar variáveis com ${nome}

*/

const texto1 = 'texto com aspas simples'
const texto2 = "texto com aspas duplas"
const texto3 = `texto com crase`

console.log(texto1)
console.log(texto2)
console.log(texto3)

/* Template Strings - (Template Literals) - Permite pular linhas e colocar variáveis com ${nome}
*/

let myAge = 26
const myString = `Minha idade é ${myAge} anos.`

/* Numbers - Números (Podem ser inteiros ou decimais)

    + ( Soma )
    - ( Subtração )
    * ( Multiplicação )
    / ( Divisão )

*/

const number1 = 10
const number2 = 20.5
const number3 = 10 + 20

/* Boolean - Verdadeiro ou Falso

true (verdadeiro)
false (falso)

*/

let isLoggedin = true
let isAdmin = false

/* Objects - Objetos
    - São estruturas que podem armazenar diversos tipos de dados, como strings, números, booleanos, arrays e até outros objetos.
    - São compostos por propriedades (chave: valor) e métodos (funções que pertencem ao objeto).
*/

const wesley = {
    name: "Wesley",
    age: 26,
    address: {
        street: "Rua A",
        number: 30,
        city: "Porto Alegre",
        state: "RS",
        country: "Brasil"
    }
}

console.log(wesley.name) // Acessando a propriedade name do objeto wesley
console.log(wesley.age) // Acessando a propriedade age do objeto wesley
console.log(wesley.address.street) // Acessando a propriedade street do objeto address dentro do objeto wesley
console.log(wesley.address.number) // Acessando a propriedade number do objeto address dentro do objeto wesley
console.log(wesley.address.city) // Acessando a propriedade city do objeto address dentro do objeto wesley
console.log(wesley.address.state) // Acessando a propriedade state do objeto address dentro do objeto wesley
console.log(wesley.address.country) // Acessando a propriedade country do objeto address dentro do objeto wesley

/* Null e Undefined 

    - null: Representa a ausência intencional de valor. É um valor atribuído a uma variável para indicar que ela não possui nenhum valor.
    - undefined: Representa a ausência de valor. É o valor padrão de uma variável que foi declarada, mas não inicializada.

*/

/* Arrays - Vetores ou Listas

    - São estruturas que armazenam múltiplos valores em uma única variavel.
    - Cada valor dentro de um array é chamado de elemento e pode ser acessado através do seu índice (posição) no array, que começa em 0.

*/

const users = ["wsley", "joao", "maria"]
console.log(users[0]) // Acessando o primeiro elemento do array users
console.log(users[1]) // Acessando o segundo elemento do array users
console.log(users[2]) // Acessando o terceiro elemento do array users

/* If e Else 

Controlador de Fluxo:

    - if - (Se) - Executa um bloco de código se a condição for verdadeira.
    - else - (Senão) - Executa um bloco de código se a condição for falsa.

Operadores de Comparação:

    > (maior que)
    < (menor que)
    ==  (igual a)
    === (estritamente igual a)
    != (diferente de)
    !== (estritamente diferente de)
    >= (maior ou igual a)
    <= (menor ou igual a)

*/

const notaDoAluno = 7
const media = 5

if(notaDoAluno > media) {
    console.log("Parabens, você passou!")
}
else {
    console.log("Infelizmente você não passou.")
}

/* Functions - Funções

    - São blocos de código que podem ser reutilizados em diferentes partes do programa.
    - Podem receber parâmetros (valores de entrada) e retornar um valor (saída).

*/

function nomeNaTela() {
    console.log("Wesley Lourenço")
}

nomeNaTela() // Chamando a função nomeNaTela

/* DOM - Document Object Model

    - É uma interface de programação para documentos HTML e XML.
    - Representa a estrutura do documento como uma árvore de nós, onde cada nó é um objeto que representa uma parte do documento (elementos, atributos, textos, etc).
    - Permite acessar e manipular o conteúdo e a estrutura do documento através de JavaScript.

*/

/* document html

    - Acessa o documento HTML e permite manipular seus elementos.

*/

getElementById("titulo") // Acessa o elemento com o id "titulo"
getElementByClassName("titulo") // Acessa os elementos com a classe "titulo"
getElementByTagName("h1") // Acessa os elementos com a tag "h1"
getElementByName("input") // Acessa os elementos com o nome "input"

querySelector("#titulo") // Acessa o primeiro elemento com o id "titulo"
querySelector(".titulo") // Acessa o primeiro elemento com a classe "titulo"
querySelector("h1") // Acessa o primeiro elemento com a tag "h1"
querySelector("input") // Acessa o primeiro elemento com o nome "input"
querySelectorAll(".titulo") // Acessa todos os elementos com a classe "titulo"
