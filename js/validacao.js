function verificaValorValido(chute) {
    const numero = +chute;
    

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return 
    }

    if(numeroForMaiorOuMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `
            <div>Valor inválido, fale um número 
            entre ${menorValor} e ${maiorValor}</div>
        `;
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }

}

function chuteForInvalido(numero) {
    const frase = chute;
    if(frase === "game over"){
        document.body.style.backgroundColor = '#393E46';
        document.body.innerHTML = `
            <h3>O jogo acabou!</h3>
            <button id="jogar-novamente" class="btn-jogar-over">Jogar Novamente</button>
        `
    }else {
        return Number.isNaN(numero);
    }
    
}

function numeroForMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})

function fimDeJogo(){
    
}