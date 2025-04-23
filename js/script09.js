function converterHoras() {
    const horas = parseFloat(document.getElementById('hora').value);
    let resultado;

    if (isNaN(horas) || horas < 0) {
        resultado = "Digite um valor válido de horas (positivo).";
        return;
    }

    const minutos = horas * 60;
    const segundos = horas * 3600;

    document.getElementById('resultado').innerHTML = `${horas} hora(s) equivale a ${minutos} minuto(s) ou ${segundos} segundo(s).`;
}
