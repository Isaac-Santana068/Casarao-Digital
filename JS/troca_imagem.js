const imagens = [
        "assests/fundo1.jpg",
        "assests/fundo2.jpg",
        "assests/fundo3.jpg",
        "assests/fundo4.png"
    ]
let indice = 0
function trocar_imagem(){
    document.body.style.backgroundImage = `url('${imagens[indice]}')`
    indice = (indice + 1) % imagens.length
}
trocar_imagem()
setInterval(trocar_imagem, 5000)