var React = require('react');
var PropTypes = require('prop-types');

class DetailsW extends React.Component {
	render() {
		var data = this.props.resp;
		return (
			<div className='column'>
				<span>{data.weather[0].description}</span>
				<span>Min Temp: {data.main.temp_min}</span>
				<span>Temp Now: {data.main.temp}</span>
				<span>Max Temp: {data.main.temp_max}</span>
				<span>Humidity: {data.main.humidity}</span>
			</div>
		)
	}
}

DetailsW.propTypes = {
	resp: PropTypes.object.isRequired
}

module.exports = DetailsW;