

// Exibir a racao a depender do Animal selecionado
$(document).ready(function() {
    $("input[type='radio']").click(function() {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".opcoesRacao").not(targetBox).hide();
        $(targetBox).show();
    })
})



function salvarDados() {
    let qtdCao = document.getElementById("quantidadeCachorro").value;
    let qtdGato = document.getElementById("quantidadeGato").value;
    let qtdRoedor = document.getElementById("quantidadeRoedor").value;

    if (qtdCao != undefined && qtdCao != null && qtdCao != 0){
        localStorage.setItem("quantidadeCao", qtdCao);
    }
    if (qtdGato != undefined && qtdGato != null && qtdGato != 0){
        localStorage.setItem("quantidadeGato", qtdGato);
    }
    if (qtdRoedor != undefined && qtdRoedor != null && qtdRoedor != 0){
        localStorage.setItem("quantidadeRoedor", qtdRoedor);
    }

    location.replace("./envioEPagamento.html")
}


document.getElementById("comprar").addEventListener("click", salvarDados);
