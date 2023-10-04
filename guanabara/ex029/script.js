function count(){
    let saida = document.querySelector('section#output')
    let number_input = Number(document.querySelector('input#number').value)
    saida.innerHTML += `<h1>Tabuada de ${number_input}<h1>`
    for(let i = 0; i <= number_input; i++){
        
        saida.innerHTML += ` ${i} &#x1F449;`
    }
    
}