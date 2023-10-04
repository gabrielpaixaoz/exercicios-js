function iniciar(){
    let number1 = Number(window.prompt('Primeiro valor:'))
    let number2 = Number(window.prompt('Segundo valor:'))
    let selection = Number(window.prompt(`Valores informados: ${number1} e ${number2}.\nOque vamos fazer?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`))
    let res = document.querySelector('section#res')
    

    res.innerHTML = `<h2> Calculando... <h2>`
    switch(selection){
        case 1: 
            res.innerHTML += `<p>${number1} + ${number2} = <strong>${number1 + number2}<strong><p>`
        break
        
        case 2: 
            res.innerHTML += `<p>${number1} - ${number2} = <strong> ${number1 - number2}<strong><p>`
        break

        case 3:
            res.innerHTML += `<p>${number1} x ${number2} = <strong>${number1 * number2}<strong><p>`
        break

        case 4:
            res.innerHTML += `<p>${number1} / ${number2} = <strong>${number1 / number2}<strong><p>`
        break

        default:
            res.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${number1} e ${number2}, mas não sei oque fazer com eles.`
    }

}