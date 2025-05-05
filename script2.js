var nome = sessionStorage.getItem("nome")
var senha = sessionStorage.getItem("senha")

let lista1 = [
    "Fala aí",
    "Fala meu mano",
    "Fala cria"
]
let emojis = ["😏","🥳","😇","🥶","🥵","👾","👻","🧐","👽"]
let random_emojis = emojis[Math.floor(Math.random() * emojis.length)]
let random_lista1 = lista1[Math.floor(Math.random() * lista1.length)]

document.getElementById("welcome").innerHTML = `${random_lista1},${nome}${random_emojis}!`
document.getElementById("welcome").style.color = "white"
document.getElementById("welcome").style.padding = "10px"