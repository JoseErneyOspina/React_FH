import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';
import { useCounter } from './../../hooks/useCounter';

export const LayoutEffect = () => {

    const{ counter, increment } = useCounter(1);
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` )
    const { quote } = !!data && data[0];
    // console.log( quote );

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize( pTag.current.getBoundingClientRect() );
    }, [quote])


    return (
        <>
            <h1> Layout Effect </h1>
            <hr/>

            <blockquote className='blockquote text-right'>
                <p
                    className='mb-0'
                    ref={ pTag }
                >
                    { quote }
                </p>
            </blockquote>

            <pre>

            </pre>
                { JSON.stringify( boxSize, null, 3 ) }
            <button
                className='btn btn-primary'
                onClick={ increment }
            >
                Siguiente quote
            </button>

        </>
    )
}
