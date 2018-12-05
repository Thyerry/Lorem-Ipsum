// Usando promise
const http = require('http')
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

let nome = []
getTurma('A').then (alunos => {
    nome = nome.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then (alunos => {
        nome = nome.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then (alunos => {
            nome = nome.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nome)
        })
    })
})

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    //.then(turmas => turmas.map(turma => turma.nome))
    .then(nomes => console.log(nomes))