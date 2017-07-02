var React = require('react');
var queryString = require('query-string');
var Loading = require('./Loading');
var IconW = require('./IconW');
var DetailsW = require('./DetailsW');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;

/*
	-> Implement Loading while waiting response
	-> If no query or no response -> "try restarting at homepage"
	-> show 5-day sum weather
	-> click on a day to go to Weather for that day
	-> reset/back to home
*/

class Forecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			city: null,
			error: null,
			loading: true,
			data: null
		}
	}
	componentDidMount() {
		var toSearch = queryString.parse(this.props.location.search);
		api.fetchWeather(5, toSearch.city).then(function(resp) {
			if (resp === null) {
				this.setState(function() {
					return {
						error: 'Looks like there was an error. Make sure you entered the city and country correctly.',
						loading: false
					}
				});
			}
			this.setState(function() {
				return {
					error: null,
					city: toSearch.city,
					loading: false,
					data: resp
				}
			});
		}.bind(this)).catch(err => {
       if (err.response.status == 404) {
          this.setState(function() {
						return {
							error: 'Looks like there was an error. Make sure you entered the city and country correctly.',
							loading: false
						}
					});
       }
    });
	}
	render() {
		var props = this.props;
		var city = this.state.city;
		var error = this.state.error;
		var loading = this.state.loading;
		var data = this.state.data;
		var infos = [];
		if(data) {
			for (var i = 0; i < data.list.length; i++) {
				infos.push(
					<Link key={i} to={{
						pathname: '/details',
	          search: '?city=' + city + '&day=' + i,
	          state: data
					}}>
						<IconW resp={data} id={i} />
					</Link>
				)
			}
		}
		if(loading === true) {
			<Loading />
		}
		if(error) {
			return (
				<div>
					<button className='button' onClick={() => {props.history.goBack()}}>Back</button>
					<div className='row'>
						<p>{error}</p>
					</div>
				</div>
			)
		}
		return (
			<div className='weatherstyler'>
				<button className='button' onClick={() => {props.history.goBack()}}>Back</button>
				<div className='row bigSpacer'>
					{data &&
						<div className='column'>
							<div className='row'>
								<p>{city}</p>
							</div>
							{data &&
								<div className='row'>
									{infos}
								</div>}
						</div>
					}
				</div>
			</div>
		);
	}
}

module.exports = Forecast;