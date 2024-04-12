function calcularMDC(numero1, numero2) {
    while (numero2 !== 0) {
        var temp = numero2;
        numero2 = numero1 % numero2;
        numero1 = temp;
    }
    return numero1;
}

function calcularEMostrarMDC() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

    var resultadoElemento = document.getElementById("resultado");

    if (isNaN(numero1) || isNaN(numero2)) {
        resultadoElemento.innerText = "Por favor, digite números válidos.";
    } else {
        var mdc = calcularMDC(numero1, numero2);
        resultadoElemento.innerText = "O máximo divisor comum (MDC) de " + numero1 + " e " + numero2 + " é: " + mdc;
    }
}
