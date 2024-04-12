function gerarFibonacci() {
    var N = parseInt(document.getElementById("numero").value);
    var resultadoElemento = document.getElementById("resultado");

    if (N <= 1 || isNaN(N)) {
        resultadoElemento.innerText = "Por favor, digite um número válido maior que 1.";
    } else {
        var termo1 = 0;
        var termo2 = 1;
        var fibonacci = [termo1, termo2];

        while (fibonacci.length < N) {
            var proximoTermo = termo1 + termo2;
            fibonacci.push(proximoTermo);
            termo1 = termo2;
            termo2 = proximoTermo;
        }

        resultadoElemento.innerText = "Sequência de Fibonacci até o " + N + "-ésimo termo: " + fibonacci.join(", ");
    }
}