import React from 'react'
import ReactDOM from 'react-dom'

import Multi from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Thyerry"/>
    </div>
    , document.getElementById('root'))