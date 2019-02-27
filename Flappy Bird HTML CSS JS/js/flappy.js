function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function MarioPipe(reversa = false) {
    this.elemento = novoElemento('div', 'mario-pipes')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

/*const mp = new MarioPipe(true)
mp.setAltura(200)
document.querySelector('[wm-flappy]').appendChild(mp.elemento)*/

function DoubleMarioPipes(altura, abertura, x) {
    this.elemento = novoElemento('div', 'double-mario-pipes')

    this.superior = new MarioPipe(true)
    this.inferior = new MarioPipe(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior

        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}


const dmp = new DoubleMarioPipes(700, 325, 400)
document.querySelector('[wm-flappy]').appendChild(dmp.elemento)