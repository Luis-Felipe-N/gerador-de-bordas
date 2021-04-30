const box = document.querySelector('.box');
const btnCopiar = document.querySelector('.btn-copiar')
const root = document.documentElement;
const bnTipos = document.querySelectorAll('.btn-unidade')
const inputs = document.querySelectorAll('input')
var unidadeM = 'px'


function mudarValor(direction) { 
    let valorInput = document.querySelector(`#valor-${direction}`).value
    let valorLabel = document.querySelector(`#label-${direction}`)
    var valorBorder = valorInput + unidadeM
    
    valorLabel.innerHTML = valorBorder
    root.style.setProperty(`--border-${direction}`, valorBorder)
};


function copyBorder() {
    var labelText = document.querySelector('.label-text')
    navigator.clipboard.writeText(labelText.innerText);
};


function zerarValor(unidade) {
    let labels =  document.querySelectorAll('.label')
    console.log(unidade)
    labels.forEach((label) => {
        label.innerText = 0 + unidade
    });
};

function mudarUnidadeMedida(unidade) {
    zerarValor(unidade)
    unidadeM = unidade
    for(let input of inputs) {
        mudarValor(input.getAttribute('data-direction'));
    }
};

// Retirar 'copiado!' do btn 

document.body.addEventListener('click' ,(e) => {
    if (!e.target.hasAttribute('data-copiar')) {
        console.log('scksn')
        btnCopiar.textContent = 'Copiar'
    }
});

btnCopiar.addEventListener('click', () => {
    console.log('tes')
    var labelText = document.querySelector('.label-text')
    navigator.clipboard.writeText(labelText.innerText);
    btnCopiar.textContent = 'Copiado!'
});

inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        e.preventDefault();
        mudarValor(input.getAttribute('data-direction'));
    });
});

bnTipos.forEach((btn) => {
    btn.addEventListener('click', () => {
        mudarUnidadeMedida(btn.innerText)
    });
});
