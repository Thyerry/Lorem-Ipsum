const listaNums = []

while(listaNums.length < 2000){
    let rand = (Math.random() * 8 + 1).toFixed(0)
    rand *= 10
    listaNums.push(rand)
}

console.log(listaNums)
let quantidade
let i = listaNums.length
let subs = [... listaNums]
subs.sort()
/**  heeee */
while(subs[0] != undefined){
    quantidade = subs.filter(a => a == subs[0]).length
    console.log(`${subs[0]} ${quantidade} ${quantidade}/${i}`)

    subs.splice(0, quantidade)
}