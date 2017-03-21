import React 		from 'react';
import Accordion from 'react-responsive-accordion';

const styles = {
	active: {
		display: 'inherit'
	},
	inactive: {
		display: 'none'
	}
}
class CustomAccordion extends React.Component{
	constructor() {
		super();

		this.state = {
			active: false
		}

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		console.log("Data:");
		this.setState({
			active: !this.state.active
		});
	}

	render() {
		const stateStyle = this.state.active ? styles.active : styles.inactive;
		console.log("style: ", stateStyle);
		return (
			<section>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>

				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>

				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div><div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>


				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>

				<div onClick={this.toggle}>Item 1</div>
				<div style={stateStyle}>Weare here</div>
			</section>
		);
	}
}

export default CustomAccordion;