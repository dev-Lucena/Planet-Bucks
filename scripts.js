/* 

    JavaScript NÃO é JAVA

    Variáveis -> Um pedacinho de memória
    do computador, que voce separa e pode
    guardar QUALQUER coisa.

    console.log -> Uma forma de ENXERGA
    o que eu tenho no JavaScript
    Dentro do Navegador

    Funcões - Pedacinho código, QUE
    Só executa, quando é chamado!

    Algoritmo
    [x] Saber quem é o botão
    [x] Saber quando o botão foi clicado
    [ ] Saber quem é Bola colorida
    [ ] Trocar a cor da Bola colorida  
    [ ] Saber quem é o copo
    [ ] Trocar a imagem do copo
      
    document = HTML
    querySelector = selecionador / pegador / buscador

*/
let circulo = document.querySelector(".circulo")
let imagemCopo = document.querySelector(".imagem-copo")
let botoes = document.querySelectorAll(".botao-menu")

// Estado local
let currentImage = 1
const totalImages = 3

// Pré-carrega imagens para reduzir o atraso ao clicar.
function preloadImages() {
    for (let i = 1; i <= totalImages; i++) {
        const img = new Image()
        img.src = `img/img${i}.png`
    }
}

// Troca a imagem de forma direta e previsível.
function changeImage(numero) {
    numero = Number(numero)
    if (numero === currentImage) return

    const newSrc = `img/img${numero}.png`
    imagemCopo.src = newSrc
    currentImage = numero
}

function setActiveButton(numeroImagem) {
    botoes.forEach(btn => btn.classList.remove('active'))
    const activeButton = Array.from(botoes).find(btn => Number(btn.dataset.numero) === numeroImagem)
    if (activeButton) activeButton.classList.add('active')
}

// Função chamada pelos botões: altera cor, anima e troca imagem
function mudarCor(cor, numeroImagem) {
    document.documentElement.style.setProperty('--cor-atual', cor)

    // pequena animação ao clicar (scale)
    imagemCopo.classList.add('pressed')
    setTimeout(() => imagemCopo.classList.remove('pressed'), 150)

    changeImage(numeroImagem)
    setActiveButton(numeroImagem)
}

function initMenuInteraction() {
    botoes.forEach((btn) => {
        btn.addEventListener('click', () => {
            const cor = btn.dataset.cor
            const numeroImagem = Number(btn.dataset.numero)

            if (!cor || Number.isNaN(numeroImagem)) return

            mudarCor(cor, numeroImagem)
        })
    })
}

// inicializa
preloadImages()
initMenuInteraction()
setActiveButton(1)





