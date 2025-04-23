function validarCPF() {
    let cpf = document.getElementById('cpf').value.replace(/\D/g, '');
    let resultadoTexto = "";

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        resultadoTexto = "❌ CPF inválido.";
    } else {
        const digitoVerificador = (cpf, pesoInicial) => {
            let soma = 0;
            for (let i = 0; i < pesoInicial - 1; i++) {
                soma += parseInt(cpf[i]) * (pesoInicial - i);
            }
            const resto = soma % 11;
            return resto < 2 ? 0 : 11 - resto;
        };

        const primeiroDigito = digitoVerificador(cpf, 10);
        const segundoDigito = digitoVerificador(cpf, 11);

        if (primeiroDigito === parseInt(cpf[9]) && segundoDigito === parseInt(cpf[10])) {
            resultadoTexto = "✅ CPF válido!";
        } else {
            resultadoTexto = "❌ CPF inválido.";
        }
    }

    document.getElementById('resultado').innerHTML = resultadoTexto;
}
