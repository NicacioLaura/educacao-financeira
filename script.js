let total = 0;

function adicionarGasto(){

    let valor = document.getElementById("valor").value;

    valor = Number(valor);

    total += valor;

    document.getElementById("total").innerHTML =
    "R$ " + total.toFixed(2);

    document.getElementById("valor").value = "";
}

function calcularInvestimento(){

    let investimento =
    Number(document.getElementById("investimento").value);

    let juros =
    Number(document.getElementById("juros").value);

    let tempo =
    Number(document.getElementById("tempo").value);

    let resultado =
    investimento * Math.pow((1 + juros/100), tempo);

    document.getElementById("resultado").innerHTML =
    "Valor final: R$ " + resultado.toFixed(2);
}