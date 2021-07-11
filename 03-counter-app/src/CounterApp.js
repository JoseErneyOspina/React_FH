import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ( { value = 0 } ) => {

    const [ counter, setCounter ] = useState(value) // [] retorna un arreglo con dos valores

    const handleAdd = () => {
        // Manera 1 -> Mejor usar este si podemos
        setCounter( counter + 1 )
        // Manera 2 -> Algunas veces usaremos este
        // setCounter( (c) => c + 1 );
    }

    const handleSubstract = () => {
        setCounter( counter - 1 )
    }

    const handleReset= () => {
        setCounter( value )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            {/* <button onClick = { (e) => { handleAdd(e)}}> +1 </button> */}
            <button onClick = { handleAdd }> +1 </button>
            <button onClick = { handleReset }> Reset </button>
            <button onClick = { handleSubstract }> -1 </button>
        </>
    )
}

// CounterApp.propTypes = {
//     value: PropTypes.number.isRequired
// }


export default CounterApp;
