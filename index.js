const products = [
    {
        id : 1,
        nome : "Miojo",
        preco : 2.00
    },
    {
        id : 2,
        nome : "Banana", 
        preco : 6.00
    },
    {
        id : 3,
        nome : "Nescau",
        preco : 7.00
    }

]


const body = document.querySelector("body")
const main = document.createElement("main")
body.appendChild(main)

const titulo = document.createElement("h1")
titulo.innerText = "Virtual Market"
main.appendChild(titulo)

const textoNoturno = document.querySelector("h4")
const modoNoturno = document.querySelector("input")
main.appendChild(textoNoturno)
main.appendChild(modoNoturno)

const item = document.createElement("h3")
item.innerText = "Item"
main.appendChild(item)

const itemValor = document.createElement("h3")
itemValor.innerText = "Valor"
itemValor.classList.add("valorItem")
main.appendChild(itemValor)

item.appendChild(itemValor)

const productList = document.createElement("ul")
main.appendChild(productList)

const productDetails = document.createElement("section")
const productDetails2 =document.createElement("section")
productDetails.appendChild(productDetails2)

const totalTitulo = document.createElement("p")
totalTitulo.innerText = "Total"
productDetails2.appendChild(totalTitulo)

function percorrerArray (){
    for(let i = 0; i<products.length; i++){
        let lista = document.createElement("li")
        let produto = document.createElement("p")
        produto.innerText = products[i].nome
        let preco = document.createElement("span")
        preco.innerText = `R$${products[i].preco}`
        produto.append(preco)
        lista.append(produto)
        productList.appendChild(lista)
    }
}
percorrerArray()


function valorTotal(){
    let soma = 0
    for(let i = 0; i<products.length; i++){
      soma+=products[i].preco
    }
    let total = document.createElement("span")
    total.innerText = `R$${soma}`
    
    totalTitulo.append(total)
    productDetails2.appendChild(totalTitulo)
    main.appendChild(productDetails)
}
valorTotal()

let botao = document.createElement('button')
botao.innerText = 'Finalizar compra'
productDetails.appendChild(botao)

const nightMode = document.querySelector('#night-mode')

nightMode.addEventListener('click', () => {
    let elemento = document.documentElement
    elemento.classList.toggle('night-mode')
})






















