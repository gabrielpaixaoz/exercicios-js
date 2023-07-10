function calcular() {
  let numero = window.prompt('Digite um número: ')
  let res = document.getElementById('res')
  if (numero.length.value == 0) {
    numero = 0
  }
  res.innerHTML = `O dobro de ${numero} é ${numero * 2} e a metade é ${
    numero / 2
  }`
}
