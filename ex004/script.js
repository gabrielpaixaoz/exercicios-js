function clicou() {
  let res = document.querySelector('p#res')
  let nome = window.prompt('Qual é seu nome?')
  if (nome.length == 0) {
    res.innerHTML = 'Escreva um nome!'
  } else {
    res.innerHTML = `Olá, ${nome}! É um grande prazer te conhecer!`
  }
}
