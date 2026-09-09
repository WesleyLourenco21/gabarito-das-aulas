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

const input = document.getElementById("main-input");

console.log(input)

const elements = document.getElementsByClassName("paragraph-js");

console.log(elements)

const titulo = document.getElementsByTagName("h1");

console.log(titulo)

const titulos = document.getElementsByName("meu-titulo");

console.log(titulos)

const query = document.querySelector("p");
//document.querySelector(".paragraph-js");
//document.querySelector("#main-input");
//document.querySelector("button.paragraph-js");

console.log(query)

const queryall = document.querySelectorAll("h1, p, input,button");

console.log(queryall)

/* Alterando e Acessando Textos

textContent: Acessa ou altera o conteúdo de texto de um elemento, incluindo tags HTML.
innerText: Acessa ou altera o conteúdo de texto de um elemento, mas ignora tags HTML e considera apenas o texto visível.
innerHTML: Acessa ou altera o conteúdo HTML de um elemento, incluindo tags HTML e texto.

*/

const element = document.querySelector("h1")

element.textContent = "Alterando o texto do h1 com textContent" // Altera o texto do h1, incluindo tags HTML
element.innerText = "Alterando o texto do h1 com innerText" // Altera o texto do h1, mas ignora tags HTML
element.innerHTML = "<span>Alterando o texto do h1 com innerHTML</span>" // Altera o conteúdo HTML do h1, incluindo tags HTML

console.log(element.textContent) // Só HTML, não leva em conta o CSS
console.log(element.innerText) // Leva em conta o CSS, só o que é visível
console.log(element.innerHTML) // Trás tudo, incluindo tags HTML

/* Alterando CSS(estilos) de um Elemento
    
    - style: Acessa ou altera os estilos CSS de um elemento.
    
*/

const button = document.querySelector("button")

button.style.color = "black" // Altera a cor do texto do botão para preto.
button.style.backGround = "purple" // Altera a cor do fundo do botão para roxo.
button.style.fontSize = "20px" // Aletera o tamanho da fonte do botão para 20 px.

/* Eventos 

Um evento é uma ação ou ocorrência detectada pelo sistema — como um clique do mouse, o pressionar de uma tecla ou um aviso do sistema operacional —, que serve de gatilho para o software executar uma resposta específica de código.

Todo evento começa com "ON" e é seguido pelo nome do evento, como "onclick", "onmouseover", "onkeydown", etc.

*/

const inputFirst = document.querySelector("#main-input")

function cliqueiNoBotao() {
    alert("Você clicou no botão.")
}

function digiteiNoInput() {
    console.log("Digitei no Input.")
}

function digiteiNoInput() {
    console.log(input.value) // Mostra no console o que foi digitado no input.
}

function cliqueiNoBotao() {
    console.log(input.value) // Mostra no console a mensagem "Você clicou no botão!".
}

/* addEventListener

    - É um método que permite adicionar um ou mais ouvintes de eventos a um elemento, sem substituir os ouvintes de eventos existentes.
    - Sintaxe: element.addEventListener(event, function, useCapture)

*/

const inputSecond = document.querySelector("#main-input") 
const selectFirst = document.querySelector("select") 
const button = document.querySelector(".main-button") 

select.addEventListener("change", function(){ 
    console.log("troquei de valor") // Mostra no console a mensagem "troquei de valor" quando o valor do select for alterado.
}) // Adiciona um ouvinte de evento ao elemento select, que será acionado quando o valor do select for alterado.

const inputCurrency = document.querySelector("#main-input")
const selectCurrency = document.querySelector("select")
const buttonConvert = document.querySelector(".main-button")

function troqueiValor(event){ // Função que será chamada quando o evento "change" for acionado no elemento select.
    console.log(event) // Mostra no console o evento que foi acionado.
}

selectCurrency.addEventListener("change", troqueiValor)  // Adiciona um ouvinte de evento ao elemento select, que será acionado quando o valor de select for alterado, chamando a função troqueiValor.

const inputCurrencyValue = Number( // Converte o valor digitado no input para número.
        document.querySelector(".currency-input").value // Acessa o valor do input com a classe "currency-input"
)

    if (currencyFrom === "real") { // Se a moeda de origem for real, converte o valor.
        valueInReal = inputCurrencyValue // Atribui o valor digitado no input à varipável valueInReal.
            currencyValueToConvert.innerHTML = Intl.NumberFormat("pt-BR", { // Formata o valor para o padrão desejado.
            style: "currency", // Define o estilo de formatação como moeda.
            currency: "BRL" // Define a moeda escolhida.
        }).format(inputCurrencyValue) // Formata o valor digitado no input para o padrão escolhido.
    }

    if (currencyTo === "dolar") { // Se a moeda de origem for real, converte o valor.
        valueConverted = valueInReal / dolarToday // Converte o valor em real para dólar, dividindo pelo valor do dólar.
            currencyValueConverted.innerHTML = Intl.NumberFormat("en-US", { // Formata o valor para o padrão desejado.
            style: "currency", // Define o estilo de formatação como moeda.
            currency: "USD" // Define a moeda escolhida.
        }).format(valueConverted) // Formata o valor convertido para o padrão escolhido.
    }

    const currencyName = document.getElementById("currency-name") // Acessa o elemento com o id. ex - "currency-name"
    const currencyImage = document.querySelector(".currency-image") // Acessa o elemento com a classe.ex - "currency-image"

    if (currencySelect.value == "dolar") { // se o valor do select for igual a "dolar", altera o nome e a imagem da moeada.
        currencyName.innerHTML = "Dólar Americano" // Altera o nome da moeda para "Dólar Americano"
        currencyImage.src = "./assets/Logo Estados Unidos.png" // Altera a imagem da moeda para a bandeira dos Estados Unidos.
    }

    /* Math - Matemática
    
    pow(2,2) - Potência - 2 elevado a 2 = 4
    sqrt(4) - Raiz Quadrada - Raiz quadrada de 4 = 2
    PI - Número Pi - 3,14
    ceil(4.3) - Arredonda para cima - 5
    floor(4.7) - Arredonda para baixo - 4
    random() - Número aleatório entre 0 e 1 - 0,5

    */

    const result = Math.pow(2, 2) // 2 elevado a 2 = 4
    const result2 = Math.sqrt(4) // Raiz quadrada de 4 = 2
    const result3 = Math.PI // Número Pi = 3,14
    const result4 = Math.ceil(4.3) // Arredonda para cima = 5
    const result5 = Math.floor(4.7) // Arredonda para baixo = 4
    const result6 = Math.random() // Número aleatório entre 0 e 1 = 0,5


    /* Operadores Aritiméticos

    + Adção
    - Subtração
    * Multiplicação
    / Divisão
    % Resto da divisão
    ++ Incremento
    -- Decremento
    ** Exponenciação

    */

    const sum = 10 + 5 // Soma de 10 + 5 = 15
    const sub = 10 - 5 // Subtração de 10 - 5 = 5
    const mult = 10 * 5 // Multiplicação de 10 * 5 = 50
    const div = 10 / 5 // Divisão de 10 / 5 = 2
    
    const resto = 10 % 3 // Resto da divisão de 10 poe 3 = 1

    let incremento = 10
    incremento++ // Incremento de 10 + 1 = 11

    let decremento = 10
    decremento-- // Decremento de 10 - 1 = 9

    let expo = 3 ** 10 // Exponenciação de 3 elevado a 10 = 59049

    /* Operadores de Atribuição 

     = Atribuição
    += Adição e Atribuição
    -= Subtração e Atribuição
    *= Multiplicação e Atribuição
    /= Divisão e Atribuição
    %= Resto

    */

    let soma = 20 
    soma += 80 // A soma dos dois igual a 100

    /* Operadores de Comparação

    == Igual - Compara o VALOR, mas não o TIPO
    === Totalmente Igual - Ele compara o VALOR e o TIPO

    */

    const firstNumber1 = 30
    const secondNumber2 = 30

    if(firstNumber1 == secondNumber2) {
        console.log("Eles são iguais") // Correto
    } else {
        console.log("Não são iguais") // Errado
    }

    const firstNumber3 = 30 
    const secondNumber4 = "30"

    if(firstNumber3 === secondNumber4) {
        console.log("Eles são iguais") // Errado
    } else {
        console.log("Não são iguais") // Correto
    }

    /*

    != Diferente - Ele compara o VALOR, mas não o TIPO
    !== Totalmente Diferente - Compara o VALOR e o TIPO

    */

    const fNumber1 = 30
    const sNumber2 = 40

    if(fNumber1 != sNumber2) {
        console.log("Sim, são diferente") // Correto
    } else {
        console.log("Não, são diferente") // Errado
    }

    const fNumber3 = 30
    const sNumber4 = "30"

    if(fNumber3 !== sNumber4) {
        console.log("Sim, são diferente") // Errado
    } else {
        console.log("Não, não são diferente") // Correto
    }