  // Crie um array que receba 5 itens e exiba no console.
  let paises = ['china', 'eua', 'argentina', 'brasil', 'espanha']
  
  console.log(paises)
  
  // Utilize um método para adicionar um nome ao inicio do array.
  paises.unshift('portugal')
  console.log(paises)
  
  // Utilize um método para remover o último nome do array.
  paises.pop()
  
  console.log(paises)

  // Utilize um método para adicionar dois nomes ao fim do array.
  paises.push('russia', 'japão')
  console.log(paises)

  // Utilize um método para remover o primeiro nome do array.
  paises.shift()
  console.log(paises)

  // Utilize um método para organizar em ordem crescente o seguinte array:
  let numbers = [7,5,6,3,8,9,2,1,4]
  let lowestToHighest = numbers.sort((a, b) => a - b);
  console.log(numbers)