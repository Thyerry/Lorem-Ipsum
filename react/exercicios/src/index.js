import React from 'react'
import ReactDOM from 'react-dom'

import Multi from './componentes/Multiplos'

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome='Thyerry' idade={50} />
        <Multi.BoaNoite nome='Thyerry' idade={50} />
    </div>
    , document.getElementById('root'))