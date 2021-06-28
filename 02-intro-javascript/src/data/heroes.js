const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

// Exportación individual
// export const owners = ['DC', 'Marvel'];
const owners = ['DC', 'Marvel'];

// Exportación por defecto
//export default heroes;

// Hacer las exportaciones en un solo export
// Tambien podemos decirle cual es default
export {
    heroes as default,
    owners
}
