// Areglos en JS
// const arreglo = new Array( 100 ); // Arreglo con 100 posiciones --> un ejemplo pero casi no se usa

const arreglo = [1, 2, 3, 4];

//arreglo.push(1); // No usar el push ya que modifica el objeto principal
// Cuando queramos insertar algo usaremos el operator spread ....

// El operator spread es muy usado para crear copias --> En si lo que hace es enviar individualmente cada uno de los elementos de ese arreglo
let arreglo2 = [ ...arreglo, 5 ];
// arreglo2.push( 5 ); // NO

// Usamos el metodo map()
// Usamos una función dentro del metodo a la cual se le llama callback es decir una función que se ejecutara dentro de ese metodo
const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );