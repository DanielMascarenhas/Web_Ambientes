function verificarPrimo() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultadoElemento = document.getElementById("resultado");

    var ehPrimo = true;

    if (numero < 2) {
        ehPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                ehPrimo = false;
                break;
            }
        }
    }

    if (ehPrimo) {
        resultadoElemento.innerText = numero + " é primo.";
    } else {
        resultadoElemento.innerText = numero + " não é primo.";
    }
}