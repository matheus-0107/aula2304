function somarPares() {
    const limite = parseInt(document.getElementById('numero').value);
    let soma = 0;

    if (isNaN(limite) || limite < 1) {
        document.getElementById('resultado').innerText = "Por favor, insira um número válido maior que 0.";
        return;
    }

    for (let i = 2; i <= limite; i += 2) {
        soma += i;
    }

    document.getElementById('resultado').innerText = `Soma dos pares até ${limite}: ${soma}`;
}
