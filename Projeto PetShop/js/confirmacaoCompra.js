


window.onload = function() {
    var saudacao = "";

    saudacao += obterSaudacaoHorario();
    if (localStorage.getItem("dadosConsumidor")) {
        saudacao += String(obterPrimeiroNome());
    }
    saudacao += "!";
    document.getElementById("saudacao").innerHTML = saudacao;

    document.getElementById("valorFinal").innerHTML = obterValorFinal();

    document.getElementById("enderecoEntrega").innerHTML = obterEndEntrega();

    imagemCachorro();
}

function obterSaudacaoHorario() {
    var date = new Date();
    var hora = date.getHours();
    var retorno = ""

    if (5 <= hora < 12){
        return "Bom dia";
    } else if (12 <= hora < 18){
        return "Boa tarde";
    } else {
        return "Boa noite";
    }

}

function obterPrimeiroNome() {
    var nomeCompleto = JSON.parse(localStorage.getItem("dadosConsumidor"))[1];
    var nomeArray = nomeCompleto.split(" ");
    var primeiroNome = nomeArray[0];

    var retorno = "";
    retorno += ", " + String(primeiroNome);

    return retorno;
}

function obterValorFinal() {
    var valorExibido = "R$ ";
    var valor = Number(localStorage.getItem("valorFinal"));
    var valor2 = valor.toFixed(2);
    var valor3 = String(valor2);
    valorExibido += String(valor3);

    return valorExibido;
}

function obterEndEntrega() {
    var endereco = "";
    var addsArray = JSON.parse(localStorage.getItem("enderecoEntrega"));
    
    var tipo1 = [1, 3];
    var tipo2 = [2, 4];

    for (var i = 0; i < 6; i++) {
        endereco += String(addsArray[i]) + " ";

        if (tipo1.includes(i)){
            endereco += ", ";
        } else if (tipo2.includes(i)) {
            endereco += "- ";
        }
    }

    return endereco;
}




function imagemCachorro() {
    $.get("https://dog.ceo/api/breeds/image/random", function(data){
        $('#imagemCachorro').attr('src', data.message)
    });
}
