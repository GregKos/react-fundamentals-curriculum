var React = require('react');
var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Weather = require('./Weather');
var Forecast = require('./Forecast');
var Link = require('react-router-dom').Link;

class App extends React.Component {
	render(){
		return (
			<Router>
				<div className='container'>
					<Nav />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/weather' component={Weather} />
						<Route path='/forecast' component={Forecast} />
						<Route render={ function() {
								return (
									<div className='row'>
										<div className='column bigSpacer'>
											<h1>Oops, the page you were looking for doesn't exist!</h1>
											<Link to='/' className='bigSpacer'>Try going back home!</Link>
										</div>
									</div>

								)
							}} />
					</Switch>
				</div>
			</Router>
		)
	}
}

module.exports = App;