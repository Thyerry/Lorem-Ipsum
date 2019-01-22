let rand = 12
let e = (Math.random()*199).toFixed(0)
const toHex = a => a.toString(16)

console.log(e)

const lista = [] 
while(lista.length < 10){
    let i = Math.random() * 101
    lista.push(i.toFixed(0))
}

console.table(rand)
console.log(lista.filter(a => a > 50).length)
console.log(lista.filter(a => a <= 50).length)
