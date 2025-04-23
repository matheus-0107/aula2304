function calcularFatorial() {
    const numero = parseInt(document.getElementById('numero').value);

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    document.getElementById('resultado').innerText = `Fatorial de ${numero} é ${fatorial}`;
}