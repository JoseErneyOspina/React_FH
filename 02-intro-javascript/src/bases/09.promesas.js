import { getHeroeById } from './bases/08-import-export'

// // Promesas
// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         // Tarea
//         // importen el
//         const heroe = getHeroeById(2);
//         resolve( heroe );
//         reject( 'No se pudo encontrar el heroe' );
//     }, 2000 )
// });

// promesa.then( ( heroe ) => {
//     console.log('heroe', heroe);
// })
// .catch( err => console.warn( err ) );

// Promesas
const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            // Tarea
            // importen el
            const heroe = getHeroeById( id );
            if( heroe ) {
                resolve( heroe );
            } else {
                reject( 'No se pudo encontrar el heroe' );
            }
        }, 2000 )
    });
}
getHeroeByIdAsync(4)
    .then( heroe => console.log( 'Heroe', heroe ))
    .catch( err => console.warn( err ) );

// getHeroeByIdAsync(4)
//     .then( console.log )
//     .catch( console.warn );