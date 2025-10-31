const imagens = [
        "fundo1.jpeg",
        "assests/fundo2.jpeg"
    ]

var indice = 0

function trocar_imagem(){
    document.body.style.backgroundImage = `url('${imagens[indice]}')`
    var indice = (indice + 1) % imagens.length
}

trocar_imagens()
setInterval(5000)