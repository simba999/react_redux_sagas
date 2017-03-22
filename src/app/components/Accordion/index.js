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
			active 				: false,
			nameActive 			: false,
			positionActive 		: false,
			firmActive			: false,
			phoneActive			: false,

		}

		this.toggle = this.toggle.bind(this);
	}

	toggle(id) {
		console.log("Data:", id);
		this.setState({
			active: !this.state.active
		});
	}

	render() {
		const stateStyle = this.state.active ? styles.active : styles.inactive;
		console.log("style: ", stateStyle);
		return (
			<section>
				{
					!this.state.active ?
						<div className="row panel_item">
							<div className="col-sm-3">Name</div>
							<div className="col-sm-8">Andrey</div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(2)}>Edit</div>
						</div>
					:
						<div className="row panel_selectedItem">
							<div className="row subpanel_title">
								<div className="pull-left">Name</div>
								<div className="pull-right">Close</div>
							</div>
							<div className="subpanel_content">
								<div className="">
									<lable>First name</lable>
									<input type="text" placeholder="First name" />
								</div>
								<div className="">
									<lable>Middle name</lable>
									<input type="text" placeholder="Middle name" />
								</div>
								<div className="">
									<lable>Last name</lable>
									<input type="text" placeholder="Last name" />
									<select type="text">
										<option>Man</option>
										<option>Woman</option>
									</select>
								</div>
								<div>
									<a className="">cancel</a>
									<a className="btn">Save</a>
								</div>
							</div>
						</div>
				}
				
				<div className="row panel_item">
					<div className="col-sm-3">Position</div>
					<div className="col-sm-8">Position</div>
					<div className="col-sm-1 panel_link">Edit</div>
				</div>
				<div className="row panel_item">
					<div className="col-sm-3">Firm</div>
					<div className="col-sm-8">
						<div>Address1</div>
						<div>Address2</div>
						<div>City, State, Zip</div>
					</div>
					<div className="col-sm-1 panel_link">Edit</div>
				</div>
				<div className="row panel_item">
					<div className="col-sm-3">Phone</div>
					<div className="col-sm-8">
						<div>Mobile: (206) 555-1234</div>
						<div>Office: (206) 555-1234 x 100</div>
					</div>
					<div className="col-sm-1 panel_link">Edit</div>
				</div>
				<div className="row panel_item">
					<div className="col-sm-3">Email</div>
					<div className="col-sm-8">Andrey@mail.com</div>
					<div className="col-sm-1 panel_link">Edit</div>
				</div>
			</section>
		);
	}
}

export default CustomAccordion;