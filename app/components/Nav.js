var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var Search = require('./Search');

function Nav() {
	return (
		 <ul className='nav'>
		 	<li>
		 		<NavLink exact to='/' className='pagetitle'>
		 			Weatherapp!
		 		</NavLink>
		 	</li>
		 	<li>
		 		<Search orientation='row'/>
		 	</li>
		 </ul>
	)
}

module.exports = Nav;