var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			city: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		var value = event.target.value;
		this.setState(function() {
			return {
				city: value
			}
		});
	}
	render(){
		return (
			<div className={this.props.orientation + ' smallSpacer'}>
				<input
					placeholder='eg Thessaloniki, Greece'
					type='text'
					autoComplete='off'
					value={this.state.city}
					onChange={this.handleChange}
					/>
				{this.state.city && 
				<Link
					className='button'
					onClick={() => {this.setState(() => {return {city: ''}});}}
					to={{
						pathname: '/weather',
            search: '?city=' + this.state.city
					}} >
					Search
				</Link>}
			</div>
		);
	}
}

Search.propTypes = {
	orientation: PropTypes.string.isRequired
}

module.exports = Search;