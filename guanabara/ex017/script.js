function clicou(){
    let anop = Number(window.prompt('Em que ano você nasceu?'))
    let res = document.querySelector('section#res')
    let agora = new Date
    let ano = agora.getFullYear()

    let anoatual = ano - anop
    if(anop.valueOf.length < 4){
        res.innerHTML = `<p>Quem nasceu em ${anop} vai completar <strong>${anoatual}</strong> anos em ${ano}.</p>`
    }
}