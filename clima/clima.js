const axios = require('axios');

const getClima = async(lat, lon) => {

    let respuesta = await axios.get(`http://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=baea62f7ab051db4059c7e1075dcf221`);

    if (respuesta.data.cod != 200) {
        throw new Error(`No hay resultados para la ciudad: ${direccion}`);
    }
    //console.log(JSON.stringify(response.data, undefined, 2));
    let main = respuesta.data.main;
    return main.temp;
}

module.exports = {
    getClima
}