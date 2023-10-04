

let numero_random = Number(Math.floor(Math.random()* 100) + 1);
function gerar(){
    let numero_usuario = Number(window.prompt('Qual é o seu palpite?'))
    let res = document.querySelector('section#res')

   
    if(numero_usuario == numero_random){
       
        res.innerHTML += `<p> PARABENS! você acertou! Eu tinha sorteado o valor ${numero_random}!<p>`
        document.getElementById('botao').style.visibility = 'hidden'
        
    }else if(numero_usuario > numero_random){
        res.innerHTML += `<p>Você falou ${numero_usuario}. Meu número é MENOR<p> `

    } else if(numero_usuario < numero_random){
        res.innerHTML += `<p>Você falou ${numero_usuario}. Meu número é MAIOR<p> `

    } 
}