const axios = require('axios');

const getLugarLatLon = async(direccion) => {
    let encodeURL = encodeURI(direccion);
    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURL }&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`);
    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad: ${direccion}`);
    }
    //console.log(JSON.stringify(response.data, undefined, 2));
    let location = respuesta.data.results[0];
    let geometria = location.geometry.location;
    let dir = location.formatted_address;

    return {
        direccion: dir,
        lat: geometria.lat,
        lon: geometria.lng
    }
}

module.exports = {
    getLugarLatLon
}