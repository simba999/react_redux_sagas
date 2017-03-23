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
			addressActive		: false,
			firmActive			: false,
			phoneActive			: false,
			emailActive 		: false,
		}

		this.toggle = this.toggle.bind(this);
	}

	toggle(id) {
		switch(id) {
			case 1: // When Name Field is activated
				this.setState({ active : true });
				this.setState({ positionActive : false });
				this.setState({ firmActive : false });
				this.setState({ addressActive : false});
				this.setState({ phoneActive : false });
				this.setState({ emailActive : false });
				break;
			case 2: // When Position Field is activated
				this.setState({ positionActive : true });
				this.setState({ active : false });
				this.setState({ firmActive : false });
				this.setState({ addressActive : false});
				this.setState({ phoneActive : false });
				this.setState({ emailActive : false });
				break;
			case 3: // When Firm Field is activated
				this.setState({ firmActive : true });
				this.setState({ active : false });
				this.setState({ positionActive : false });
				this.setState({ addressActive : false});
				this.setState({ phoneActive : false });
				this.setState({ emailActive : false });
			case 4: // // When Address Field is activated
				this.setState({ addressActive : true});
				this.setState({ firmActive : false });
				this.setState({ active : false });
				this.setState({ positionActive : false });
				this.setState({ phoneActive : false });
				this.setState({ emailActive : false });
			case 5: // When Phone Field is activated
				this.setState({ phoneActive : true });
				this.setState({ addressActive : false });
				this.setState({ firmActive : false });
				this.setState({ active : false });
				this.setState({ positionActive : false });
				this.setState({ emailActive : false });
			case 6: // When Phone Field is activated
				this.setState({ emailActive : true });
				this.setState({ phoneActive : false });
				this.setState({ addressActive : false });
				this.setState({ firmActive : false });
				this.setState({ active : false });
				this.setState({ positionActive : false });
			default:
				break;
		}
	}

	unToggole(id) {
		switch(id) {
			case 1:
				this.setState({ active: false });
				break;
			case 2:
				this.setState({ positionActive: false });
				break;
			case 3:
				this.setState({ firmActive : false });
				break;
			case 4:
				this.setState({ addressActive : false });
				break;
			case 5:
				this.setState({ phoneActive : false });
				break;
			case 6:
				this.setState({ emailActive : false });
				break;
			default:
				break;
		}
		
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
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(1)}>Edit</div>
						</div>
					:
						<div className="row panel_selectedItem">
							<div className="row subpanel_title">
								<div className="pull-left">Name</div>
								<div className="pull-right" onClick={() => this.unToggole(1)}>Close</div>
							</div>
							<div className="subpanel_content">
								<div className="row">
									<label className="col-sm-3 banner_label">First name</label>
									<input type="text" placeholder="First name" className="col-sm-9"/>
								</div>
								<div className="row">
									<label className="col-sm-3 banner_label">Middle name</label>
									<input type="text" placeholder="Middle name" className="col-sm-9" />
								</div>
								<div className="row">
									<label className="col-sm-3 banner_label">Last name</label>
									<input type="text" placeholder="Last name" className="col-sm-3 padding_right_middle" />
									<label className="col-sm-2 banner_label">Suffix</label>
									<select type="text" className="col-sm-3 padding_right_middle">
										<option>Man</option>
										<option>Woman</option>
									</select>
								</div>
								<div className="row text-right col-sm-12">
									<a className="about_link" style={{paddingRight : '2em'}}>cancel</a>
									<a className="btn close_button">Save</a>
								</div>
							</div>
						</div>
				}

				{
					!this.state.positionActive ?
						<div className="row panel_item">
							<div className="col-sm-3">Position</div>
							<div className="col-sm-8">Position</div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(2)}>Edit</div>
						</div>
					:
						<div className="row panel_selectedItem">
							<div className="row subpanel_title">
								<div className="pull-left">Position</div>
								<div className="pull-right" onClick={() => this.unToggole(2)}>Close</div>
							</div>
							<div className="subpanel_content">
								<div className="row">
									<label className="col-sm-3 banner_label">Position</label>
									<select placeholder="Position" className="col-sm-9">
										<option>Attorney</option>
										<option>Seattle</option>
									</select>
								</div>
								<div className="row">
									<label className="col-sm-3 banner_label">Bar number</label>
									<input type="text" className="col-sm-9" />
								</div>
								<div className="row">
									<label className="col-sm-3 banner_label">State</label>
									<select className="col-sm-3">
										<option>WA</option>
										<option>MA</option>
									</select>
									<label className="col-sm-2 text-right">Admit</label>
									<select className="col-sm-3">
										<option>12-01-85</option>
										<option>11-09-06</option>
									</select>
								</div>
								<div className="row">
									<label className="col-sm-3 banner_label">Bar number</label>
									<input type="text" className="col-sm-9" placeholder="Bar number" />
								</div>
								<div className="row">
									<label className="col-sm-3 banner_label">State</label>
									<select className="col-sm-3" placeholder="State">
										<option></option>
										<option></option>
									</select>
									<label className="col-sm-2 text-right">Admit</label>
									<select className="col-sm-3" placeholder="Admit">
										<option></option>
										<option></option>
									</select>
								</div>
								<div className="row text-right col-sm-12">
									<a className="about_link" style={{paddingRight : '2em'}}>cancel</a>
									<a className="btn close_button">Save</a>
								</div>
							</div>
						</div>
				}

				{
					!this.state.firmActive ?
						<div className="row panel_item">
							<div className="col-sm-3">Firm</div>
							<div className="col-sm-8">The Law Office of Leonard W. Moen, PLLC</div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(3)}>Edit</div>
						</div>
					:
						<div className="row panel_selectedItem">
							<div className="row subpanel_title">
								<div className="pull-left">Firm</div>
								<div className="pull-right" onClick={() => this.unToggole(3)}>Close</div>
							</div>
							<div className="subpanel_content">
								<div className="row">
									<label className="col-sm-3 banner_label">Firm</label>
									<input type="text" className="col-sm-9" placeholder="Firm" />
								</div>
								<div className="row text-right col-sm-12">
									<a className="about_link" style={{paddingRight : '2em'}}>cancel</a>
									<a className="btn close_button">Save</a>
								</div>
							</div>
						</div>
				}

				{
					!this.state.addressActive ?
						<div className="row panel_item">
							<div className="col-sm-3">Address</div>
							<div className="col-sm-8">
								<div>Address1</div>
								<div>Address2</div>
								<div>City, State, Zip</div>
							</div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(4)}>Edit</div>
						</div>
					:
						<div className="row panel_selectedItem">
							<div className="row subpanel_title">
								<div className="pull-left">Address</div>
								<div className="pull-right" onClick={() => this.unToggole(4)}>Close</div>
							</div>
							<div className="subpanel_content">
								<div className="row">
									<label className="col-sm-3 banner_label">Address1</label>
									<input type="text" className="col-sm-9" placeholder="Address1" />
								</div>
								<div className="row">
									<label className="col-sm-3 banner_label">Address2</label>
									<input type="text" className="col-sm-9" placeholder="Address2" />
								</div>
								<div className="row">
									<label className="col-sm-3 banner_label">City</label>
									<input type="text" className="col-sm-9" placeholder="City" />
								</div>
								<div className="row">
									<label className="col-sm-3 banner_label">State</label>
									<input type="text" className="col-sm-9" placeholder="City" />
								</div>
								<div className="row">
									<label className="col-sm-3 banner_label">Zip</label>
									<select className="col-sm-9" placeholder="Zip code">
										<option>WA</option>
										<option>MA</option>
									</select>
								</div>
								<div className="row text-right col-sm-12">
									<a className="about_link" style={{paddingRight : '2em'}}>cancel</a>
									<a className="btn close_button">Save</a>
								</div>
							</div>
						</div>
				}

				{
					!this.state.phoneActive ?
						<div className="row panel_item">
							<div className="col-sm-3">Phone</div>
							<div className="col-sm-8">
								<div>Mobile: (206) 555-1234</div>
								<div>Office: (206) 555-1234 x 100</div>
							</div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(5)}>Edit</div>
						</div>
					: 
						<div className="row panel_selectedItem">
							<div className="row subpanel_title">
								<div className="pull-left">Phone</div>
								<div className="pull-right" onClick={() => this.unToggole(5)}>Close</div>
							</div>
							<div className="subpanel_content">
								<div className="row">
									<label className="col-sm-3 banner_label">Phone</label>
									<input type="text" className="col-sm-9" placeholder="(206) 555-1234" />
								</div>
								<div className="row">
									<label className="col-sm-3 banner_label">Phone type</label>
									<select className="col-sm-5">
										<option>Office</option>
										<option>Home</option>
									</select>
									<label className="col-sm-2 banner_label">Ext</label>
									<select className="col-sm-2">
										<option>Office</option>
										<option>Home</option>
									</select>
								</div>
								<div className="row">
									<label className="col-sm-3 banner_label">Phone</label>
									<input type="text" className="col-sm-9" placeholder="Phone" />
								</div>
								<div className="row">
									<label className="col-sm-3 banner_label">Phone type</label>
									<select className="col-sm-5" placeholder="Phone type">
										<option>Office</option>
										<option>Home</option>
									</select>
									<label className="col-sm-2 banner_label">Ext</label>
									<select className="col-sm-2">
										<option>Office</option>
										<option>Home</option>
									</select>
								</div>
								<div className="row text-right col-sm-12">
									<a className="about_link" style={{paddingRight : '2em'}}>cancel</a>
									<a className="btn close_button">Save</a>
								</div>
							</div>
						</div>

				}

				{
					!this.state.emailActive ?
						<div className="row panel_item">
							<div className="col-sm-3">Email</div>
							<div className="col-sm-8">Andrey@mail.com</div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(6)}>Edit</div>
						</div>
					:
						<div className="row panel_selectedItem">
							<div className="row subpanel_title">
								<div className="pull-left">Email</div>
								<div className="pull-right" onClick={() => this.unToggole(6)}>Close</div>
							</div>
							<div className="subpanel_content">
								<div className="row">
									<label className="col-sm-3 banner_label">Phone type</label>
									<input type="text" className="col-sm-9" placeholder="Phone type" />
								</div>
							</div>
						</div>
				}
				
				
			</section>
		);
	}
}

export default CustomAccordion;