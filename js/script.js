const elementoResposta = document.querySelector("#resposta")    
const inputPergunta = document.querySelector("#inputPergunta")
const respostas = [
    "Certeza",
    "Não tenho certeza.",
    "E decididamente assim.",
    "Não conte com isso.",
    "Sem duvidas.",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente.",
    "Minha resposta é não.",
    "Voce pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possivel prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim."
]



// Clicar em fazer pergunta

function fazerPergunta() {


    if(inputPergunta.value == "") {
        alert("Digite sua pergunta")
        return
    }

    const pergunta = "<div>" + inputPergunta.value + " </div>"

    //Gerar numero aleatorio
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
     
    
    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]


    //Sumir a resposta depois de 3 segundos

    setTimeout(function() {
        elementoResposta.style.opacity = 0;
    }, 3000) 


        
    
}

