var React = require('react');
var PropTypes = require('prop-types');

class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			city: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		var value = event.target.value;
		this.setState(function() {
			return {
				city: value
			}
		});
	}
	handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit(
			this.state.city
		);
		console.log(this.state.city)
	}
	render(){
		return (
			<form className='column smallSpacer' onSubmit={this.handleSubmit}>
				<input
					id='city'
					placeholder='eg Thessaloniki, Greece'
					type='text'
					autoComplete='off'
					htmlFor='city'
					value={this.state.city}
					onChange={this.handleChange}
					/>
				<button
					className='button'
					type='submit'
					disabled={!this.state.city}>
					Search
				</button>
			</form>
		);
	}
}

Search.propTypes = {
	onSubmit: PropTypes.func.isRequired
}

module.exports = Search;