const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {

    if( action?.type === 'agregar' ) {
        return [ ...state, action.payload ];
    }

    return state;
};

let todos = todoReducer();

// Agregar un nuevo todo
// Este new todo lo debo de mandar de alguna manera a mi useReducer mediante la acción, ya que dentro del reducer es donde necesito hacer algo para modificar el state
const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

// Creamos la acción
// Es un estandar que tenga el type: ya que este type le dira el reducer que tipo de acción es
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
};

// Mandamos los todos y la acción
todos = todoReducer( todos, agregarTodoAction );

console.log(todos);