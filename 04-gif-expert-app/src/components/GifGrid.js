import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ( { category } ) => {

    // Desestructuramos data que viene del custom hook
    const { data:images, loading } = useFetchGifs( category );


    return (
        <>
            <h3 className = 'animate__animated animate__fadeIn'> { category } </h3>
            { loading && <p className = 'animate__animated animate_flash'>Loading</p> }
            <div className ='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem
                            key = { img.id }
                            // img = { img }
                            // Podemos usar el siguiente metodo u usar props en el componente
                            { ...img } // Así envio cada una de las propiedades como una propiedad independiente
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export  default GifGrid;
