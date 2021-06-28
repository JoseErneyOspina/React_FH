console.log('Hola mundo');

const nombre = 'Fernando';
const apellido = 'Herrera';

// const nombreComleto = nombre + '' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log( nombreCompleto );

function getSaludo(nombre) {
    return `Hola ${nombre}`;
}

console.log(`Este es un texto: ${getSaludo(nombre) }`);