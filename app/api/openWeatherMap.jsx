var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const SUBSTRING = 'units=metric&appid=6ccbf7129c951bf4b4728cc0fd294a67';


module.exports = {
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&${SUBSTRING}`;

    return axios.get(requestUrl).then(function(res){
      debugger;
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function(res) {
        throw new Error(res.data.message);
    });

  }
}
