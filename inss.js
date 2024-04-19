const nome = "Thomaz";
const sexo = "M"; 
const idade = 75; 
const contribuicao = 50; 

function podeAposentar (nome, sexo, idade, contribuicao) {
    if (sexo == "M") {
        const tempoContribuicaoHomem = 35;
        const somaIdadeContribuicaoHomem = idade + contribuicao;
        if (contribuicao >= tempoContribuicaoHomem && somaIdadeContribuicaoHomem >= 95) {
            return true;
        }
    } if (sexo == "F") {
        const tempoContribuicaoMulher = 30;
        const somaIdadeContribuicaoMulher = idade + contribuicao;
        if (contribuicao >= tempoContribuicaoMulher && somaIdadeContribuicaoMulher >= 85) {
            return true;
        }
    }
    return false;
}

if (podeAposentar(nome, sexo, idade, contribuicao)) {
    console.log(`${nome}, você pode se aposentar.`);
} else {
    console.log(`${nome}, você não pode se aposentar.`);
}