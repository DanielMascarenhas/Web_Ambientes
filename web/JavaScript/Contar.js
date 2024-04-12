function contarENotificar() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

    var resultadoElemento = document.getElementById("resultado");

    if (isNaN(numero1) || isNaN(numero2)) {
        resultadoElemento.innerText = "Por favor, digite números válidos para os dados.";
    } else {
        var primeiroDado = Math.min(numero1, numero2);
        var segundoDado = Math.max(numero1, numero2);
        var contagem = 0;

        for (var i = primeiroDado; i <= segundoDado; i++) {
            contagem++;
        }

        resultadoElemento.innerText = "Existem " + contagem + " valores inteiros entre " + primeiroDado + " e " + segundoDado + ".";
    }
}