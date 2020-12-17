


window.onload = function() {
    var precoRacaoCachorro = 64.9;
    var precoRacaoGato = 59.9;
    var precoRacaoRoedor = 47.9;

    let qtdCao = localStorage.getItem("quantidadeCao");
    let qtdGato = localStorage.getItem("quantidadeGato");
    let qtdRoedor = localStorage.getItem("quantidadeRoedor");

    //.toFixed(2)
    let valorCaoTotal = precoRacaoCachorro * Number(qtdCao) ;
    let valorGatoTotal = precoRacaoGato * Number(qtdGato) ;
    let valorRoedorTotal = precoRacaoRoedor * Number(qtdRoedor) ;
    let valorTotal = 0;

    if (qtdCao != undefined && qtdCao != null && qtdCao != 0){
        document.getElementById("precoCao").innerHTML = precoRacaoCachorro.toFixed(2);
        document.getElementById("qtdCao").innerHTML = qtdCao;
        document.getElementById("valorCaoTotal").innerHTML = `R$ ${valorCaoTotal.toFixed(2)}`;
        valorTotal += Number(valorCaoTotal);
    } else {
        document.getElementById("compraCao").style.display = "none";
    }

    if (qtdGato != undefined && qtdGato != null && qtdGato != 0){
        document.getElementById("precoGato").innerHTML = precoRacaoGato.toFixed(2);
        document.getElementById("qtdGato").innerHTML = qtdGato;
        document.getElementById("valorGatoTotal").innerHTML = `R$ ${valorGatoTotal.toFixed(2)}`;
        valorTotal += Number(valorGatoTotal);
    } else {
        document.getElementById("compraGato").style.display = "none";
    }

    if (qtdRoedor != undefined && qtdRoedor != null && qtdRoedor != 0){
        document.getElementById("precoRoedor").innerHTML = precoRacaoRoedor.toFixed(2);
        document.getElementById("qtdRoedor").innerHTML = qtdRoedor;
        document.getElementById("valorRoedorTotal").innerHTML = `R$ ${valorRoedorTotal.toFixed(2)}`;
        valorTotal += Number(valorRoedorTotal);
    } else {
        document.getElementById("compraRoedor").style.display = "none";
    }


    let valorFinal = 0;

    if (valorTotal > 200) {
        alert("Você ganhou um desconto!!");
        valorFinal = valorTotal * 0.9;
        document.getElementById("desconto").innerHTML = `(R$ ${(valorTotal-valorFinal).toFixed(2)})`;
    } else {
        document.getElementById("desconto").style.display = "none";
        valorFinal = valorTotal;
    }

    localStorage.setItem("valorTotal", valorTotal);
    localStorage.setItem("valorFinal", valorFinal);
    document.getElementById("valorTotal").innerHTML = `R$ ${valorFinal.toFixed(2)}`;
}


function mascaraCpf(i){
    var v = i.value;

    if (isNaN(v[v.length-1])) { // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7){
        i.value += ".";
    }
    if (v.length == 11){
        i.value += "-";
    }
}
// function mascaraCep(j){
//     var c = j.value;

//     if (isNaN(c[c.length-1])) { // impede entrar outro caractere que não seja número
//         j.value = c.substring(0, c.length-1);
//         return;
//     }
    
//     j.setAttribute("maxlength", "9");
//     if (c.length == 5){
//         j.value += "-";
//     }
// }



function buscarCep(){
    var cepValue = cep.value;

    fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
    .then(response =>{
        console.log(response);
        return response.json();
    })
    .then (data =>{
        console.log(data);
        retornarDados(data);
    })

}



function retornarDados(data) {
    const logradouro = document.getElementById("logradouro");
    const bairro = document.getElementById("bairro");
    const localidade = document.getElementById("localidade");
    const uf = document.getElementById("uf");

    logradouro.value = data.logradouro;
    bairro.value = data.bairro;
    localidade.value = data.localidade;
    uf.value = data.uf;
}


function salvarDados() {
    // Salvar dados do consumidor como array no localStorage através do JSON
    let dadosConsumidor = [];
    dadosConsumidor.push(document.getElementById("cpf").value);
    dadosConsumidor.push(document.getElementById("nome").value);
    dadosConsumidor.push(document.getElementById("dataNascimento").value);

    localStorage.setItem("dadosConsumidor", JSON.stringify(dadosConsumidor));

    // Salvar dados do endereço como array no localStorage através do JSON
    let enderecoEntrega = [];
    enderecoEntrega.push(document.getElementById("logradouro").value);
    enderecoEntrega.push(document.getElementById("numero").value);
    enderecoEntrega.push(document.getElementById("bairro").value);
    enderecoEntrega.push(document.getElementById("localidade").value);
    enderecoEntrega.push(document.getElementById("uf").value);
    enderecoEntrega.push(document.getElementById("cep").value);

    localStorage.setItem("enderecoEntrega", JSON.stringify(enderecoEntrega));

    location.replace("./confirmarCompra.html")
}

document.getElementById("btnProxPag").addEventListener("click", salvarDados);




// object1 = JSON.parse(localStorage.getItem("savedData"))[0];
// object2 = JSON.parse(localStorage.getItem("savedData"))[1];




const cep = document.getElementById("cep");
cep.addEventListener("blur", buscarCep);

///////////////////////////////////////////////////////////////////////////////////////////////////




// https://github.com/hcodebr/javascript-fetch-api/blob/master/src/js/main.js


// https://www.youtube.com/watch?v=Pi6wkdU2vR4


// https://viacep.com.br/
// viacep.com.br/ws/01001000/json/

//https://www.alura.com.br/artigos/comecando-com-fetch-no-javascript


