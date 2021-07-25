import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {


    // 1. Obtener la referencia al userContext
    // 2. extraer el setUser
    const { setUser } = useContext(UserContext);

    // 3. Crear objeto con data del user


    return (
        <>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={ () => setUser({
                    id: 123,
                    name: 'Fernando'
                })}
            >
                Login
            </button>
        </>
    )
}
