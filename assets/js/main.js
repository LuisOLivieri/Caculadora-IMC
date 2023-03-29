// Capturar evento de submit do formulãrio

const form = document.querySelector('#form'); //Selecionado o envio para parar o formulário. 
form.addEventListener('submit', function (e){ //Qual o evento que deverá ser parado - submit, para não atualizar.
    e.preventDefault(); // Chamar o preventDefault cancela o evento.
    const inputPeso = e.target.querySelector('#peso'); //Informar o elemento que tá recenbo o evento
    const inputAltura = e.target.querySelector('#altura'); //Informar o elemento que tá recenbo o evento
    
    const peso = Number(inputPeso.value); //Valor
    const altura = Number(inputAltura.value); //Valor

    if (!peso) { //IF(se) o peso não for falso executo:
        setResultado('Peso Inválido', false); //setResultado é a função que criamos para enviar a mensagem no resultado.
        return;
    }

    if (!altura) { //If(se) a altura não for falsa ex:
        setResultado('Altura Inválida', false); //setResultado é a função que criamos para enviar a mensagem no resultado.
        return;
    }

    const imc = getImc(peso, altura); //Calculo IMC
    const nivel = getNivelImc(imc); //Parametro IMC

    const msg = `Seu IMC é ${imc} (${nivel}).`
    setResultado(msg, true); //Função criada para exibir o resultado.
}); 

function getNivelImc (imc) { //Pegar o resultado IMC para saber o indice. 
    const nivel = ['Abaixod do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']; //Array
    if (imc >= 39.9) return nivel[5]; //Para a execucao caso for verdadeira.
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0]; 
    
}

function getImc (peso, altura) { //Criando a função getImc
    const imc = peso / altura ** 2; //Calculo
    return imc.toFixed(2); //Retorna o resultado. toFixed(2 - casas decimais)
}

function criaP (){ //Função especializada em criar paragrafos
    const p = document.createElement ('p'); //Criando paragrafo
    return p;
}

function setResultado(msg, isValid){ //Especialidade da função é adicionar alguma coisa nesse resultado.
    const resultado = document.querySelector('#resultado'); //Resultado pego pelo ID
    resultado.innerHTML = ''; //innerHTML insere elementos na pagina
    
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }    

    p.innerHTML = msg; //Adicionar a mensagem da função (SETRESULTADO, msg) no p (innerHTML)
    resultado.appendChild(p); 

} 