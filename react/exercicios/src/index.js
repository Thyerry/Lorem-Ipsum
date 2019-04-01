import React from 'react'
import ReactDOM from 'react-dom'

import Multi from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Tony" sobrenome="Felix">
            <Filho nome="Thob"/>
            <Filho nome="Thyerry"/>
            <Filho nome="Thayná"/>
            
        </Pai>
    </div>
    , document.getElementById('root'))