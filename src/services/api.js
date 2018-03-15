const https = require('https');
const axios = require('axios');


const servicio = 'http://localhost:3030';


class api {
    
    get (url) {
        return axios.get(servicio + url);
    }

}

module.exports = new api();