var React = require('react');
var PropTypes = require('prop-types');

class DetailsW extends React.Component {
	render() {
		var data = this.props.resp;
		var id = this.props.id;
		return (
			<div className='column'>
				<span>{data.list[id].weather[0].description}</span>
				<span>Min Temp: {data.list[id].temp.min}</span>
				<span>Max Temp: {data.list[id].temp.max}</span>
				<span>Humidity: {data.list[id].humidity}</span>
			</div>
		)
	}
}

DetailsW.propTypes = {
	resp: PropTypes.object.isRequired,
	id: PropTypes.number.isRequired
}

module.exports = DetailsW;