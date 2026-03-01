function gerarTabuada() {
    var numero = document.getElementById('numero')
    var resultado = document.getElementById('areatabuada')

    var n = Number(numero.value)
    resultado.value = ''
    count = 0

    while (count <= 10) {
        var multiplicacao = n * count
        resultado.value += `${n} x ${count} = ${multiplicacao} \n`
        count++
    }

    // for (var count = 0; count <= 10; count++) {
    //     var multiplicacao = n * count
    //     resultado.value += `${n} x ${count} = ${multiplicacao} \n`
    // }
}