function calcular(){
    n1 = Number(window.prompt('Digite um número:'))
    n2 = Number(window.prompt('Digite outro Número:'))
    res = document.querySelector('section#resultado')
    
    if(n1 > n2){
        res.innerHTML = `<p>Analisando os valores ${n1} e ${n2}, o maior valor é ${n1}<p>`
    } else if(n1 < n2){
        res.innerHTML = `<p>Analisando os valores ${n1} e ${n2}, o maior valor é ${n2}<p>`
    } else{
        res.innerHTML = `<p>Analisando os valores ${n1} e ${n2}, ambos são IGUAIS`
    }
    }
