function calcular(){
    let nome = window.prompt('Qual é o nome do aluno?')
    let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}`))
    let med = (nota1 + nota2)/2

    let msg 
    
    if(med >= 6){
        msg = 'Meus parabéns!'
    } else{
        msg = 'Estude um pouco mais!'
    }


    let res = document.getElementById('resultado')

    res.innerHTML = `<p>Calculando a média final de ${nome}.<p>`
    res.innerHTML += `<p>As notas obtidas foram ${nota1} e ${nota2}.`
    res.innerHTML += `<p>A média final será de ${med}.<p>`
    res.innerHTML += `<p>A mensagem de temos é: <strong style='color:red;'>${msg}<strong></p>`
}