function clicou(){    
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let agora = new Date
    res = document.querySelector('section#res')
    let dia = agora.getDate()
    let mes = agora.getMonth() // Jan = 0 | Fev = 1 | Mar = 2 e assim vai...
    let ano = agora.getFullYear()
    let sem = agora.getDay()
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let sec = agora.getSeconds()


    res.innerHTML =  `<p>Dia: <strong>${dia}</strong><p>`
    res.innerHTML += `<p>Mês: <strong>${meses[mes]}</strong><p>`
    res.innerHTML += `<p>Ano: <strong>${ano}</strong><p>`
    res.innerHTML += `<p>Dia da semana: <strong>${semana[sem]}</strong><p>`
    res.innerHTML += `<p>Hora: <strong>${hora}</strong><p>`
    res.innerHTML += `<p>Minutos:<strong> ${min}</strong><p>`
    res.innerHTML += `<p>Segundos:<strong>${sec}</strong><p>`
   

}