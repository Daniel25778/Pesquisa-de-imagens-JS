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


const limparId = (urlImagem) => urlImagem.split("/")[2]
    .split(".")[0].replace(" ", "-").toLowerCase()

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    const novoLink = document.createElement("a")
    novoLink.href = `#${ limparId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)
}



// const criarSlide = (urlImagem) => {
//     const container = document.querySelector(".slider-container")
//     const slide = document.createElement("div")
//     slide.id = urlImagem
//     const containerImagem = document.createElement("div")
//     containerImagem.classList.add("imagem-container")
//     const linkFechar = document.createElement("a")
//     linkFechar.classList.add("fechar")
//     const linkAnterior = document.createElement("a")
//     linkAnterior.href = urlImagem
//     linkAnterior.classList.add(" navegacao anterior")
//     linkProximo.innerText = "&#171;"
//     const linkProximo = document.createElement("a")
//     linkProximo.href = urlImagem
//     linkProximo.innerText = "&#187;"
//     linkProximo.classList.add(" navegacao proximo")

//     container.appendChild(slide)
//     slide.appendChild(containerImagem)
//     containerImagem.appendChild(linkFechar, linkAnterior, linkProximo)
// }

const carregarImagens = () => imagens.forEach(criarItem)
    // const carregarSlides = () => imagens.forEach(criarSlide)

const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")
    const slide = document.createElement("div")
    slide.classList.add("slide")
    slide.id = limparId(urlImagem)

    const indiceAnterior = indice > 0 ? indice - 1 : arr.length - 1
    const idAnterior = limparId(arr[indiceAnterior])

    const indiceProximo = indice < arr.length - 1 ? indice + 1 : 0
    const idProximo = limparId(arr[indiceProximo])

    slide.innerHTML = `
            <div class="imagem-container">
                <a href="" class="fechar">&#128473;</a>
                <a href="#${idAnterior}" class="navegacao anterior">&#171;</a>
                <img src="${urlImagem}" alt="">
                <a href="#" class="navegacao proximo">&#187;</a>
            </div>`

    container.appendChild(slide)
}


const carregarSlides = () => imagens.forEach(criarSlide)

carregarImagens()
carregarSlides()