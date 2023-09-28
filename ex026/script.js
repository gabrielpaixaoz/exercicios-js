function count(){
    let output = document.querySelector('section#output')

    output.innerHTML += `<h1>Contagem Regressiva de 10 a 1<h1>`
    


    for(let i = 10; i >= 1; i--){
       if(i % 2 == 0){
            output.innerHTML += `${i}&#x1F449;`
        }else{
            output.innerHTML += `${i} &#x1F449;`
        }

        
    }
    output.innerHTML += ` &#x1F3C1;`
}