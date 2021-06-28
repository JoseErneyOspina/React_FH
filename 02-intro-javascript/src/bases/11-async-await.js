//const getImagenPromesa = () => new Promise( ( resolve, reject ) => resolve('https://ajskdhaskjdahjs.com');
//getImagenPromesa().then( console.log );

const getImagen = async() => {
    try {
        const apiKey = 'GsXFGFd47V7TOKbO804uxZYJSOu178Bx';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        // ????
        const { data } = await resp.json()
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

        console.log( data );
    } catch ( error ) {
        // Manejo del error
        console.error( error );
    }

}
getImagen();
