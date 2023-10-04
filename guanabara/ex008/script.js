function calcular() {
  let nome = window.prompt('Qual o nome do aluno?')
  let priN = window.prompt(`Qual foi a primeira nota de ${nome}?`)
  let lastN = window.prompt(
    `Além de ${priN}, qual foi a outra nota de ${nome}?`
  )
  let res = document.getElementById('res')
  let n1 = Number(priN)
  let n2 = Number(lastN)
  if (priN.length.value == 0 || lastN.length.value == 0) {
    n1 = 0
    n2 = 0
  }

  res.innerHTML = `<p>Calculando a média final de ${nome}.<p>`
  res.innerHTML += `<p>As notas obtidas foram ${n1} e ${n2}`
  res.innerHTML += `<p> A média final será ${(n1 + n2) / 2}. `
}
