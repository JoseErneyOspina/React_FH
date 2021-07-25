import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './TodoReducer';

import './style.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';



// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );
    // console.log(todos);

    // Usamos este efecto para guardar en el localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [ todos ]);


    const handleDelete = ( todoId ) => {
        // console.log( todoId );
        // El id lo obtenemos en el onClick del button enviando el id como argumento

        // Crear la action
        const action = {
            type: 'delete',
            payload: todoId
        };

        // dispatch
        dispatch( action );

    };


    const handleToggle = ( todoId ) => {

        // Nos creamos la action pero lo haremos rapido y enviaremos en el dispatch de una vez
        dispatch({
            type: 'toggle',
            payload: todoId
        });

    };


    const handleAddTodo = ( newTodo ) => {

        dispatch( {
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <>
            <h1>TodoApp ( { todos.length } ) </h1>
            <hr />

            <div className='row'>

                <div className='col-7'>

                    <TodoList
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />

                </div>

                <div className='col-5'>
                    <TodoAdd
                        handleAddTodo={ handleAddTodo }
                    />
                </div>

            </div>
        </>
    )
}
