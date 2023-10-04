function calcular() {
  let numero = window.prompt('Digite um número: ')
  let n = Number(numero)
  let res = document.getElementById('res')

  if (numero.length.value == 0) {
    n = 0
  }

  res.innerHTML = `<p>O número a ser analisado aqui será o <strong>${n}<strong><p>`
  res.innerHTML += `<hr>`
  res.innerHTML += `<p>O seu valor absoluto é ${n}<p>`
  res.innerHTML += `<p>A sua parte inteira é ${Math.floor(numero)}<p>`
  res.innerHTML += `<p>O valor inteiro mais próximo é ${Math.round(numero)}<p>`
  res.innerHTML += `<p> A sua raiz quadrada é ${Math.sqrt(numero)}<p>`
  res.innerHTML += `<p> A sua raiz cúbica é ${numero ** (1 / 3)}`
  res.innerHTML += `<p> O valor de ${n}<sup>2</sup> é ${n ** 2}`
  res.innerHTML += `<p> O valor de ${n}<sup>3</sup> é ${n ** 3}`
}
