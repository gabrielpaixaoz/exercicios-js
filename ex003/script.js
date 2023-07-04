function clicou() {
 let nome = window.prompt("Qual é seu nome?")
 if(nome.length == 0){
  window.alert('Escreva um nome!')
 } else{
  window.alert(`Olá, ${nome}! É um prazer te conhecer!`)
 }

}
