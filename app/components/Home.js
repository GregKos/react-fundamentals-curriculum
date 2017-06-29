var React = require('react');
var Link = require('react-router-dom').Link;
var Search = require('./Search');

class Home extends React.Component {
	render() {
		return (
			<div className='home-container'>
				<div className='row bigSpacer'>
					<p className='bigFont'>Weatherapp! Get current weather...and stuff.</p>
				</div>
				<div className='column smallSpacer'>
					<p>In this SPA you can get information about current weather and a 5-day forecast.</p>
				</div>
				<label className='bigFont bigSpacer'>
					Enter a City and Country
				</label>
				<Search orientation='column'/>
			</div>
		);
	}
}

module.exports = Home;