const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=GsXFGFd47V7TOKbO804uxZYJSOu178Bx`;
    const resp = await fetch ( url );
    // resp.ok?

    // Desestructuramos la data que queremos
    const { data } = await resp.json();
    // console.log(data);

    // Vamos a barrer la data
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}

export default getGifs;