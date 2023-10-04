const formulario = document.querySelector('form#form')
function tabuada(event){
    event.preventDefault(); 
    var output = document.querySelector('section#output')
    const number = Number(document.querySelector('input#number').value)
    output.innerHTML = `<h2>Tabuada de ${number}<h2>`
    for(let i = 1; i <= 10; i++){
        output.innerHTML += `${number} x ${i} = ${i * number}<br>`
    }

}

formulario.addEventListener('submit',tabuada)