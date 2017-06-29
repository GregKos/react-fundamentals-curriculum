var React = require('react');
var PropTypes = require('prop-types');

class DetailsW extends React.Component {
	render() {
		var data = this.props.resp;
		return (
			<div className='column'>
				<span>{data.list[id].weather[0].description}</span>
				<span>Min Temp: {data.list[id].main.temp_min}</span>
				<span>Temp Now: {data.list[id].main.temp}</span>
				<span>Max Temp: {data.list[id].main.temp_max}</span>
				<span>Humidity: {data.list[id].main.humidity}</span>
			</div>
		)
	}
}

DetailsW.propTypes = {
	resp: PropTypes.object.isRequired,
	id: PropTypes.number.isRequired
}

module.exports = DetailsW;