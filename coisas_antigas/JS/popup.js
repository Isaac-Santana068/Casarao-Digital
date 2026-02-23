var abrir = document.getElementById('opcoes');
var popup = document.getElementById('pop');
var fechar = document.getElementById('fechar');
abrir.addEventListener('click', () => {
    popup.style.display = 'block';
})
fechar.addEventListener('click', () => {
    popup.style.display = 'none'
})