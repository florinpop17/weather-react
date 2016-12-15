// API KEY 
// 067f9b0a0e77a197bf09f73103141290

var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=067f9b0a0e77a197bf09f73103141290&units=metric';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl).then(function(res){
            if(res.cod && res.message) {
                throw new Error(res.message)
            } else {
                return res.data.main.temp;
            }
        }, function(err){
            throw new Error(err.response.data.message);
        });
    }
}