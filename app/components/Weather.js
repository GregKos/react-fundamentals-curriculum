var React = require('react');
var queryString = require('query-string');
var Loading = require('./Loading');
var IconW = require('./IconW');
var DetailsW = require('./DetailsW');

/*
	-> Implement Loading while waiting response
	-> If no query or no response -> "try restarting at homepage"
	-> show current weather based on response
	-> button for forecast
	-> reset/back to home
*/

class Weather extends React.Component {
	render() {
		var props = this.props;
		var query = queryString.parse(this.props.location.search);
		var city = query.city;
		var id = parseInt(query.day);
		var data = props.location.state;
		return (
			<div className='weatherstyler'>
				<button className='button' onClick={() => {props.history.goBack()}}>Back</button>
				<div className='column bigSpacer'>
					{data &&
						<div className='column'>
							<IconW resp={data} id={id} />
							<p>{city}</p>
							<DetailsW resp={data} id={id} />
						</div>
					}
				</div>
			</div>
		);
	}
}

module.exports = Weather;