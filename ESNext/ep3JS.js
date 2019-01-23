const listaNums = []

while (listaNums.length < 2005) {
    let rand = (Math.random() * 8 + 1).toFixed(0)
    rand *= 10
    listaNums.push(rand)
}

let quantidade
let i = listaNums.length
let subs = [...listaNums]

const resultados = {
    numero: [],
    ocorrencias: [],
    densidade: []
}

subs.sort()
/**  heeee */
while (subs[0] != undefined) {
    quantidade = subs.filter(a => a == subs[0]).length

    resultados.numero.push(subs[0])
    resultados.ocorrencias.push(quantidade)
    resultados.densidade.push(((quantidade / i) * 100).toFixed(2))

    subs.splice(0, quantidade)
}

resultados.densidade.map(a=> a+'%')
console.table(resultados)