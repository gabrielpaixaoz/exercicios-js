let res = document.querySelector("section#res")
function random(){
   let random_number = Math.floor(Math.random() * 100) + 1;
   

   res.innerHTML += `<p>Acabei de pensar no número ${random_number}<p>`
}



function limpar(){
    
    res.innerHTML = null
}