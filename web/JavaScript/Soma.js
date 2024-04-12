function calcularSomatorio() {
    const entrada = document.getElementById("numeros").value;
    const numeros = entrada.split(', ').map(Number);

    let somatorio = 0;
    for (let i = 0; i < numeros.length; i++) {
        somatorio += numeros[i];
    }

    document.getElementById("resultado").innerText = "O somatório dos números é: " + somatorio;
}