const thyerry = a => a+1;

let abc = thyerry(123)


console.log(abc)

//let e var
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
//console.log(b) não está definido

// Template String

const produto = 'iPad'
console.log(`${produto} é caro`)


// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l,e,tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'ana', idade: 9 }
console.log(i, nome)