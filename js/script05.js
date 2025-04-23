

function verificarPalpite() {
    const numeroSecreto = 6;
    const palpite = parseInt(document.getElementById('numero').value);
    let mensagem;

    if (palpite < numeroSecreto) {
        mensagem = "🔼 Tente um número maior.";
    } else if (palpite > numeroSecreto) {
        mensagem = "🔽 Tente um número menor.";
    } else {
        mensagem = "🎉 Parabéns! Você acertou!";
    }
    document.getElementById('resultado').innerHTML = mensagem;
}


