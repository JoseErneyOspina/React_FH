// import { heroes } from './data/heroes'
// Usando short code imp
// import moduleName from 'module';
import heroes, { owners } from "../data/heroes"; // escribiendo heroes y sale para auto import

const getHeroeById = ( id ) => {
    return heroes.find( ( heroe ) => heroe.id === id );
}


// find? -> filter()
console.log( getHeroeById(2) )

const getHeroesByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner );
console.log( getHeroesByOwner('DC') );

export {
    getHeroeById,
    getHeroesByOwner
};