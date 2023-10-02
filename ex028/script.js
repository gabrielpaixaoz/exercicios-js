function count(){
    let saida = document.querySelector('section#output')
    let number_input = Number(document.querySelector('input#number1').value)
    let second_number_input = Number(document.querySelector('input#number2').value)
    saida.innerHTML += `<h2> Contando de ${number_input} até ${second_number_input}`

    if (number_input<second_number_input){
        for(let i = number_input; i <= second_number_input; i++){
       
            saida.innerHTML += ` ${i}`
        }
    } else{
        for(let i = number_input; i >= second_number_input; i--){
            saida.innerHTML += ` ${i}`
        }
    }


    
    
}