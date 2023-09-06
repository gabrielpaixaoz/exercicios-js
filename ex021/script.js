function iniciar(){
    let number1 = Number(window.prompt('Primeiro valor:'))
    let number2 = Number(window.prompt('Segundo valor:'))
    let selection = Number(window.prompt(`Valores informados: ${number1} e ${number2}.\nOque vamos fazer?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`))
    let res = document.querySelector('section#res')
    var numbers = [1, 2 , 3 ,4]


    if(isNaN(number1) || isNaN(number2) || isNaN(selection) || selection !== 2){
        res.innerHTML = `OPÇÃO INVÁLIDA!`
    } else{
       res.innerHTML = `ok`
    }
}