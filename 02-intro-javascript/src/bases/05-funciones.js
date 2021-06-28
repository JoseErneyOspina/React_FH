// Funciones en JS
// function saludar( nombre ) {
//     return `Hola, ${ nombre }`;
// }

// Funcion usando const
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

// Necesitamos hacer funciones usando const y además usando funciones flecha
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`
const saludar4 = () => `Hola Mundo`

console.log( saludar2('Vegeta'));
console.log( saludar3('Vegeta'));
console.log( saludar4());

// Puedo decir que hay un return sin escribir return poniendo los corchetes {} dentro de parentesis ()
const getUser = () => ({
    uid: 'ABC123',
    username: 'El_papi1502'
});

const user = getUser();
console.log(user);

// *TODO =>
// 1. Transformar a una función de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

// function getUsuarioActivo( nombre ) {
//     return {
//         uid: 'ABC567',
//         userName: nombre
//     }
// };

// const usuarioActivo = getUsuarioActivo('Fernando');
// console.log( usuarioActivo );

// Resutlo =>
const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    userName: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );