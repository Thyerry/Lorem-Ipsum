import React from 'react'

export default props => [
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>{props.idade}</h2>
]


/*
export default props =>
    <Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <br />{props.idade}
    </Fragment>
*/

/*
export default props =>
    <div>
        <h1>Bom dia {props.nome}!</h1>
        <br />{props.idade}
    </div>
*/