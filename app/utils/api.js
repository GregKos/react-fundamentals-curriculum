var axios = require('axios');

var key = '68219181a5817f6fa1c6062594b5768c';
var param = '&appid=' + key;

module.exports = {
	fetchWeather: function (type, city) {
		var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/' + type + '?q=' + city + param + '&units=metric');
		return axios.get(encodedURI).then(function (response) {
			return response.data;
		})
	}
}