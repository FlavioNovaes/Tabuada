function gerarTabuada() {
    var numero = document.getElementById('numero')
    var resultado = document.getElementById('areatabuada')
    var aviso = document.getElementById('aviso')

    var n = Number(numero.value)
    resultado.value = ''
    count = 0

    if (numero.value.length == 0) {
        aviso.innerHTML = `<strong>Digite um número abaixo!</strong>`
    } else {
        while (count <= 10) {
            aviso.innerHTML = ''
            var multiplicacao = n * count
            resultado.value += `${n} x ${count} = ${multiplicacao} \n`
            count++
        }
    }

    // for (var count = 0; count <= 10; count++) {
    //     var multiplicacao = n * count
    //     resultado.value += `${n} x ${count} = ${multiplicacao} \n`
    // }
}