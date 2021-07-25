import React from 'react';

export const Hijo = React.memo(({ numero, increment }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary me-3"
            onClick={ () => increment( numero ) }
        >
            { numero }
        </button>
    )
})
