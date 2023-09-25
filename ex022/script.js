function mes(){
    let mes = window.prompt('Digite o Mês em extenso (ex: Setembro)')
    let res = document.querySelector('section#res')
    let estacao


    switch(mes.toUpperCase()){
        case 'JANEIRO' : case 'FEVEREIRO': case 'MARÇO' :
            estacao = 'VERAO'
            break
        
        case 'ABRIL' : case 'MAIO' : case 'JUNHO':
            estacao = 'OUTONO'
            break


        case 'JULHO' : case 'AGOSTO' : case 'SETEMBRO':
            estacao = 'INVERNO'
            break

        case 'OUTUBRO' : case 'NOVEMBRO' : case 'DEZEMBRO':
            estacao = 'PRIMAVERA'
            break
            
        default:        
            estacao = 'INDEFINIDA'
            break
    }



    res.innerHTML = `<p>No mês de ${mes}, estamos na estação <strong>${estacao}<strong> <p>`
}