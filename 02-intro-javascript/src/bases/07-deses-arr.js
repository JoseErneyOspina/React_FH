const personajes = ['Goku', 'Vegeta', 'Trunks'];

// Forma sin desestructuración para llamar a los personajes
// console.log( personajes[0] );
// console.log( personajes[1] );
// console.log( personajes[2] );

// Con desestructuración
// TIP: Si nos paramos sobre el nombre de la referencia podemos cambiar el nombre con el atajo
// Windows --> windows + f2
// MAC --> fn + f2
// const [ goku ] = personajes; // Solo llama al primero
const [ , , p3 ] = personajes; // omite el primero y segundo elemento y solo tra el 3 elemento
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. El primer valor de arr se llamará nombre
// 2. se llamará setNombre
const usState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo'); } ];
}
const [ nombre, setNombre ] = usState('Goku');
console.log( nombre );
setNombre();