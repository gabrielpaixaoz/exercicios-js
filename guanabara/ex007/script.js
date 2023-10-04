function soma() {
  let num1 = window.prompt('Digite um número:')
  let num2 = window.prompt('Digite outro número: ')
  let res = document.getElementById('res')
  let n1 = Number(num1)
  let n2 = Number(num2)
  if (num1.length.value == 0 || num2.length.value == 0) {
    n1 = 0
    n2 = 0
  }
  res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <b>${n1 + n2}<b>!`
}
