const axios = require('axios');

const getClima = async ( lat, lng ) => {

    // const temperatura = 273.15;

    const appid = '37d2147fbabf1f1e7c05a8dbdb597947';
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=${ appid }&units=metric`);

    // var tempCalculada = resp.data.main.temp;

    return resp.data.main.temp;
    // return parseFloat( tempCalculada - temperatura).toFixed(2);
}

module.exports = {
    getClima
}