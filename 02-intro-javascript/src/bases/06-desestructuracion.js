// Desestructuración
// También conocido como Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// Extraemos los elementos del objeto
// const { nombre, edad, clave } = persona;
// Renombrarlo
// const { nombre:nombre2 } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );
// console.log( persona.nombre );
// console.log( persona.edad );
// console.log( persona.clave );

// ----> Otro ejemplo
// const retornaPersona = ( usuario ) => {
//     const { nombre, edad, clave } = usuario;
//     console.log( edad, clave, nombre );
// }

// Algo muy usuado es usar la desestructuración directamente en el argumento
const retornaPersona = ( { nombre, edad, rango = 'Capitan', clave } ) => {
    console.log( edad, nombre, rango );

    return {
        nombreClave: clave,
        age: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

// También podemos extraer elementos de objetos anidados por ejemplo latlng:{lat, lng}
const { nombreClave, age, latlng:{lat, lng}} = retornaPersona ( persona );
// También se puede hacer en dos pasos para traer elementos de objetos anidados
// const { nombreClave, age, latlng } = retornaPersona ( persona );
// const { lat, lng } = latlng;
console.log( nombreClave, age );
console.log( lat, lng);