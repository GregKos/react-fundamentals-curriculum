var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav() {
	return (
		 <ul className='nav'>
		 	<li>
		 		<NavLink exact to='/' className='pagetitle'>
		 			Weatherapp!
		 		</NavLink>
		 	</li>
		 	<li>
		 		search here too
		 	</li>
		 </ul>
	)
}

module.exports = Nav;