"use strict"

const imagens = [
    "./img/arvorePorDoSol.jpg",
    "./img/arvoreVerao.jpg",
    "./img/coruja.jpg",
    "./img/lagoInverno.jpg",
    "./img/montanhaInverno.jpg",
    "./img/porDoSolFlores.jpg",
    "./img/raposaInverno.jpg",
    "./img/tigreInverno.jpg"
]

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    const novoLink = document.createElement("a")
    novoLink.href = urlImagem
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)
}

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()