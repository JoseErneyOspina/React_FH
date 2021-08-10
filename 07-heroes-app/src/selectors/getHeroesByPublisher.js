
import { heroes } from './../data/heroes';


export const getHeroesByPublisher = ( publisher ) => {

    const validatePublisher = ['DC Comics', 'Marvel Comics'];

    if( !validatePublisher.includes( publisher ) ) {
        throw new Error(`Publisher "${ publisher }" no es correcto`);
    }

    return heroes.filter( hero => hero.publisher === publisher );
}