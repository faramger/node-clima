const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad a obtener el clima',
            demmand: true
        },
    })
    .command('ConsultarClima', 'Comando para consultar el clima', {
        lat: { desc: 'Latitud' },
        lon: { desc: 'Longitud' }
    })
    .command('ConsultarLocalizacion', 'Comando para consultar el clima', {
        direccion: { desc: 'Direccion', alias: 'd' },
        lat: { desc: 'Latitud' },
        lon: { desc: 'Longitud' }
    })
    .command('ConsultarClimaDeLocalizacion', 'Comando para consultar el clima', {
        lat: { desc: 'Latitud' },
        lon: { desc: 'Longitud' }
    })
    .help()
    .argv;

let comando = argv._[0];

switch (comando) {
    case 'ConsultarLocalizacion':
        lugar.getLugarLatLon(argv.direccion).then(respuesta => {
            console.log(respuesta);
        }).catch(err => console.log(err));
        break;
    case 'ConsultarClima':
        clima.getClima(argv.lat, argv.lon).then(res => {
            console.log(res)
        }).catch(err => console.log(err));
        break;
    case 'ConsultarClimaDeLocalizacion':
        lugar.getLugarLatLon(argv.direccion).then(respuesta => {
            clima.getClima(respuesta.lat, respuesta.lon).then(res => {
                console.log({
                    direccion: respuesta.direccion,
                    latitud: respuesta.lat,
                    longitud: respuesta.lon,
                    temperatura: res
                })
            }).catch(err => console.log(err));
        }).catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}


/*
lugar.getLugarLatLon(argv.direccion)
    .then(
        respuesta => {
            console.log(respuesta);


        }
    ).catch(err => console.log(err));

clima.getClima(argv.lat, argv.lon).then(res => {
    console.log(res)
}).catch(err => console.log(err));

*/