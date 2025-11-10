const imagens = [
        "assests/fundo1.jpeg",
        "assests/fundo2.jpeg",
        "assests/fundo3.jpg"
    ]
let indice = 0
function trocar_imagem(){
    document.body.style.backgroundImage = `url('${imagens[indice]}')`
    indice = (indice + 1) % imagens.length
}
trocar_imagem()
setInterval(trocar_imagem, 5000)