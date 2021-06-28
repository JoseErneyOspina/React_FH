
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    },
};

// Una manera de invicar es con un objeto que tiene propiedad persona
// console.log( {persona} );

// Con el console.table vemos en tabla la info para ver más facilmente -> bastante comodo y conveniente
// console.table(persona);

// Esto no es un clon es una acción de ferencia es el mismo objeto, no lo debemos hacer jamas ya que hacemos es una copia de referencia
// const persona2 = persona;
// persona2.nombre = 'Peter';
// console.log(persona);
// console.log(persona2);

// Para hacer esto de usar el otro objeto para crear uno
// Utilizamos el operator spread -> usando ... + el nombre del objeto --> ...persona
const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);