let res = document.getElementById('resultado')

function ac1() {
  res.innerHTML += `<p>Clicou no primeiro botão<p>`
}

function ac2() {
  res.innerHTML += `<p>Clicou no segundo botão<p>`
}

function ac3() {
  res.innerHTML += `<p>Clicou no terceiro botão.`
}
function ac4() {
  res.innerHTML += `<p>Clicou no quarto botão.`
}

function clean() {
  res.innerHTML = null
}
