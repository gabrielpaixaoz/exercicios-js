function count(){
    let output = document.querySelector('section#output')

    output.innerHTML += `<h1>Contando de 1 até 10, marcando os pares<h1>`
    


    for(let i = 1; i <= 10; i++){
       if(i % 2 == 0){
            output.innerHTML += `<mark><stong>${i}</stong></mark>&#x1F449;`
        }else{
            output.innerHTML += `${i} &#x1F449;`
        }

        
    }
    output.innerHTML += ` &#x1F3C1;`
}