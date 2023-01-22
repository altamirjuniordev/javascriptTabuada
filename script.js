function executar() {
    let Num = document.getElementById('numero').value
    let numero = Number(Num)
    let Resultado = document.getElementById('Resultado')
    Resultado.innerHTML = `Número escolhido: ${numero} <br><br><br> `
    

    for(let multiplicador = 1; multiplicador<=10; multiplicador++ ) {
        Resultado.innerHTML += `${numero}*${multiplicador}= ${numero*multiplicador} <br><br>`
    }
}