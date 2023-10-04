function myFunction(a, b, c, d, e, f) {
  /*const soma = a + b
  const subtra = soma - c
  const divi = subtra * d / e
  const res = divi ** f

  return res*/
  return (((a + b - c) * d) / e) ** f
}

console.log(myFunction(6, 5, 4, 3, 2, 1))
console.log(myFunction(6, 2, 1, 4, 2, 3))
console.log(myFunction(2, 3, 6, 4, 2, 3))
