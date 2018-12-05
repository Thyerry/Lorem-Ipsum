// não aceita repetição / não indexado
const times = new Set()
times.add('Sport')
times.add('Ibis')
times.add('Nautico')
times.add('Vasco')
times.add('Sport')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Nautico')
console.log(times.has('Nautico'))
