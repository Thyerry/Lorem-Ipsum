import React from 'react'
import Filho from './Filho'

import { childrenWithProps } from 'C:/Users/Thyerry/Desktop/Lorem-Ipsum/react/exercicios/src/utils/utils.js'

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>
