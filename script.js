let nome;
let senha;

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("forbutton").addEventListener("click",function(){
        nome = document.getElementById("for_nome").value;
        senha = document.getElementById("for_senha").value;

        sessionStorage.setItem("nome",nome)
        sessionStorage.setItem("senha",senha)

        window.location.href = "menu.html";
    })
})