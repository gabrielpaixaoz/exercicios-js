function calcular(){
    let number = Number(window.prompt('Digite um número:'))
    let tipo 
    if (number % 2 === 0){
        tipo = '<strong>PAR<strong>'
    } else{
        tipo = '<strong>IMPAR<strong>'
    }
    
    let res = document.querySelector('section#resultado')
    res.innerHTML = `<p> O número ${number} que foi digitado é ${tipo}!<p>`
}