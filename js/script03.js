function idade(){
    const idade = parseInt(document.getElementById('idade').value);
    let resultado;
    if(idade <= 12){
         resultado = "Criança";
    } else {
        if(idade >= 13 && idade <= 18){
            resultado = "Adolescente";
        } else{
            if(idade >= 19 && idade <= 59){
                resultado = "Adulto"
            } else {
                if(idade >= 60) {
                    resultado = "Idoso";
                }
            }
        }
    }
    document.getElementById('resultado').innerHTML = resultado;
}
