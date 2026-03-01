function gerarTabuada() {
    var numero = document.getElementById('numero')
    var resultado = document.getElementById('areatabuada')
    var aviso = document.getElementById('aviso')

    var count = 0

    if (numero.value.length == 0) {
        aviso.innerHTML = `<strong>Digite um número abaixo!</strong>`
        return
    } 
    else {
        var n = Number(numero.value)
        aviso.innerHTML = ''
        resultado.value = ''
        while (count <= 10) {
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