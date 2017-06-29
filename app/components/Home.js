var React = require('react');
var Link = require('react-router-dom').Link;
var Search = require('./Search');

class Home extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			toSearch: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit() {
		this.setState(() => {
			var newState = {};
			newState = city;
			return newState;
		});
	}
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
				<Search onSubmit={this.handleSubmit}/>
			</div>
		);
	}
}

module.exports = Home;