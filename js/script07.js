function ehPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function mostrarPrimos() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('fim').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(inicio) || isNaN(fim) || inicio > fim) {
        resultado.innerText = "Digite valores válidos (inicial menor ou igual ao final).";
        return;
    }

    let primos = [];

    for (let i = inicio; i <= fim; i++) {
        if (ehPrimo(i)) {
            primos.push(i);
        }
    }

    resultado.innerText = primos.length > 0
        ? `Primos entre ${inicio} e ${fim}: ${primos.join(', ')}`
        : `Não há primos entre ${inicio} e ${fim}.`;
}
