var React = require('react');
var Timestamp = require('react-timestamp');
var PropTypes = require('prop-types');

class IconW extends React.Component {
	render() {
		var data = this.props.resp;
		var id = this.props.id;
		return (
			<div className='column'>
				<img src={'/app/images/weather-icons/' + data.weather[0].icon + ".svg"} />
				<div className='smallSpacer'><Timestamp time={data.dt} format='date' includeDay /></div>
			</div>
		)
	}
}

IconW.propTypes = {
	resp: PropTypes.object.isRequired
}

module.exports = IconW;