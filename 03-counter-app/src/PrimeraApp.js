import React from 'react';

// FC -> Functional Components
const PrimeraApp = ( props ) => {

    const saludo = 'Hola Mundo const';
    // const saludo = 123;
    // const saludo = 123.45;
    // const saludo = true;
    // const saludo = [1, 2, 3, 4];
    // const saludo = {
    //     nombre: 'Fernando',
    //     edad: 34
    // }

    return (
        <>
            <h1> { saludo } </h1>
            {/* <pre> { JSON.stringify( saludo, null, 3 ) } </pre>  */}
            <p>Mi primera aplicación</p>
        </>
    );
};

export default PrimeraApp;