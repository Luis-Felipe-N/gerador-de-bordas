const box = document.querySelector('.box');
var inputs = document.querySelectorAll('input')
const btnCopiar = document.querySelector('.btn')
var root = document.documentElement;


inputs.forEach(e => {
    e.addEventListener('input', () => {
        mudarValor(e.getAttribute('value'))
    })
});


function mudarValor(direction) {
    let valorInput = document.querySelector(`#valor-${direction}`).value
    let valorLabel = document.querySelector(`#label-${direction}`)
    var valorBorder = valorInput + 'px'
    
    valorLabel.innerHTML = valorBorder
    root.style.setProperty(`--border-${direction}`, valorBorder)
};

btnCopiar.addEventListener('click', (e) => {
    var labelText = document.querySelector('.label-text')
    navigator.clipboard.writeText(labelText.innerText);
    btnCopiar.textContent = 'Copiado!'
});

// Retirar 'copiado!' do btn 

document.body.addEventListener('click' ,(e) => {
    if (e.target.className != 'btn') {
        btnCopiar.textContent = 'Copiar'
    }
});


function copyBorder() {
    var labelText = document.querySelector('.label-text')
    navigator.clipboard.writeText(labelText.innerText);
};
