var axios = require('axios');

var key = '68219181a5817f6fa1c6062594b5768c';
var param = '&units=metric&appid=' + key;

module.exports = {
	fetchWeather: function (count, city) {
		var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&cnt=' + count + param);
		console.log(encodedURI);
		return axios.get(encodedURI).then(function (response) {
			return response.data;
		})
	}
}