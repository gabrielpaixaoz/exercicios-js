

function fatorial(event){
    event.preventDefault();
    var output = document.querySelector('section#output')
    const form = document.querySelector('form#form')

    const number = Number(document.querySelector('input#number').value)
    output.innerHTML = `<h2>Calculando ${number}!<h2>`


    for(let i = number; i >= 2; i--){
        output.innerHTML += ` ${i} x `
        
    }

    var result = 1;

    for(var nf = 2; nf <= number; nf++){
        result *= nf;
    }




    output.innerHTML += `1 = ${result} `
}

form.addEventListener('submit',fatorial)




/*const formulario = document.querySelector('form#form')
function tabuada(event){
    event.preventDefault(); 
    var output = document.querySelector('section#output')
    const number = Number(document.querySelector('input#number').value)
    output.innerHTML = `<h2>Tabuada de ${number}<h2>`
    for(let i = 1; i <= 10; i++){
        output.innerHTML += `${number} x ${i} = ${i * number}<br>`
    }

}

formulario.addEventListener('submit',tabuada) */
