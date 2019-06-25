
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('./config/yargs').argv;



// clima.getClima( 35, 139 )
// .then( console.log )
// .catch( err => console.log(err));


const getInfo = async ( direccion ) => {

    try {
        const coords = await lugar.getLugarLatLng( direccion );;
        const temperatura = await clima.getClima( coords.lat, coords.lng );

        return `El clima de ${ direccion } es de ${ temperatura }.`;

    } catch (e) {

        return `No se pudo determinar el clima de ${ direccion }.`;
    }
     
}

getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log );