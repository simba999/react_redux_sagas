import React 			from 'react';
import SplitButton 		from 'react-split-button';
//import {MenuItem} from 'rc-menu';
//import 'rc-menu/assets/index.css';
import { ContextMenu, MenuItem} from "react-contextmenu";
import Accordion 		from 'react-responsive-accordion';

const styles = {
	active: {
		display: 'inherit'
	},
	inactive: {
		display: 'none'
	}
}

const isGrey = {
	active: {
		color: '#bfbfbf',

	},
	inactive: {
		color: '#0d0d0d'
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
			greyState			: '',
			addPosition 		: 'addPositionFalse',
			addPhone 			: 'addPhoneFalse',
		}

		this.toggle = this.toggle.bind(this);
		//const addPositionStyle;
	}


	toggle(id) {
		switch(id) {
			case 1: // When Name Field is activated
				this.setState({ active 			: true });
				this.setState({ positionActive 	: false });
				this.setState({ firmActive 		: false });
				this.setState({ addressActive 	: false});
				this.setState({ phoneActive 	: false });
				this.setState({ emailActive 	: false });
				this.setState({ greyState 		: 'grey' });
				break;
			case 2: // When Position Field is activated
				this.setState({ positionActive 	: true });
				this.setState({ active 			: false });
				this.setState({ firmActive 		: false });
				this.setState({ addressActive 	: false});
				this.setState({ phoneActive 	: false });
				this.setState({ emailActive 	: false });
				this.setState({ greyState 		: 'grey' });
				break;
			case 3: // When Firm Field is activated
				this.setState({ firmActive 		: true });
				this.setState({ active 			: false });
				this.setState({ positionActive 	: false });
				this.setState({ addressActive 	: false});
				this.setState({ phoneActive 	: false });
				this.setState({ emailActive 	: false });
				this.setState({ greyState 		: 'grey' });
				break;
			case 4: // // When Address Field is activated
				this.setState({ addressActive 	: true});
				this.setState({ firmActive 		: false });
				this.setState({ active 			: false });
				this.setState({ positionActive 	: false });
				this.setState({ phoneActive 	: false });
				this.setState({ emailActive 	: false });
				this.setState({ greyState 		: 'grey' });
				break;
			case 5: // When Phone Field is activated
				this.setState({ phoneActive 	: true });
				this.setState({ addressActive 	: false });
				this.setState({ firmActive 		: false });
				this.setState({ active 			: false });
				this.setState({ positionActive 	: false });
				this.setState({ emailActive 	: false });
				this.setState({ greyState 		: 'grey' });
				break;
			case 6: // When Phone Field is activated
				this.setState({ emailActive 	: true });
				this.setState({ phoneActive 	: false });
				this.setState({ addressActive 	: false });
				this.setState({ firmActive 		: false });
				this.setState({ active 			: false });
				this.setState({ positionActive 	: false });
				this.setState({ greyState 		: 'grey' });
				break;
			default:
				break;
		}
	}

	unToggle(id) {
		switch(id) {
			case 1:
				this.setState({ active: false });
				this.setState({ greyState : ''});
				break;
			case 2:
				this.setState({ positionActive: false });
				this.setState({ greyState : ''});
				break;
			case 3:
				this.setState({ firmActive : false });
				this.setState({ greyState : ''});
				break;
			case 4:
				this.setState({ addressActive : false });
				this.setState({ greyState : ''});
				break;
			case 5:
				this.setState({ phoneActive : false });
				this.setState({ greyState : ''});
				break;
			case 6:
				this.setState({ emailActive : false });
				this.setState({ greyState : ''});
				break;
			default:
				break;
		}
		
	}

	// closeAction() {
	// 	this.setState({ addPosition : 'addPositionTrue' });
	// 	this.setState({ greyState : ''});
	// }

	saveData() {

	}

	render() {
		//const stateStyle = this.state.active ? isGrey.active : isGrey.inactive;
		return (
			<section className=" row accordion">
				{
					!this.state.active ?
						<div className={"row panel_item" + " " + this.state.greyState}>
							<div className="col-sm-3">Name</div>
							<div className="col-sm-8">Andrey</div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(1)}>Edit</div>
						</div>
					:
						<div className="row panel_selectedItem">
							<div className="row subpanel_title">
								<div className="pull-left">Name</div>
								<div className="pull-right cancel_link" onClick={() => this.unToggle(1)}>Close</div>
							</div>
							<div className="row subpanel_content">
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
									<input type="text" placeholder="Last name" className="col-sm-4 padding_right_middle" />
									<label className="col-sm-1 banner_label">Suffix</label>
									<select type="text" className="col-sm-4 padding_right_middle">
										<option>Man</option>
										<option>Woman</option>
									</select>
								</div>
							</div>
							<div className="row text-right subpanel_footer col-sm-12">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(1)}>cancel</a>
								<a className="btn close_button">Save</a>
							</div>
						</div>
				}

				{
					!this.state.positionActive ?
						<div className={"row panel_item" + " " + this.state.greyState}>
							<div className="col-sm-3">Position</div>
							<div className="col-sm-8">Position</div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(2)}>Edit</div>
						</div>
					:
						<div className="row panel_selectedItem">
							<div className="row subpanel_title">
								<div className="pull-left">Position</div>
								<div className="pull-right" style={{ 'display' : 'inline-flex' }}>
									<div className="cancel_link" onClick={() => {this.setState({ addPosition : 'addPositionTrue' })}}>Add</div> 
									<div>&nbsp; | &nbsp;</div>
									<div className="cancel_link" onClick={() => this.unToggle(2)}>Close</div>
								</div>
								
							</div>
							<div className="row subpanel_content">
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
									<select className="col-sm-4">
										<option>12-01-85</option>
										<option>11-09-06</option>
									</select>
								</div>
								<div className="row">
									<SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
									    <MenuItem eventKey="1">Action</MenuItem>
									    <MenuItem eventKey="2">Another action</MenuItem>
									    <MenuItem eventKey="3">Something else here</MenuItem>
									    <MenuItem divider />
									    <MenuItem eventKey="4">Separated link</MenuItem>
									 </SplitButton>
								</div>

								<div className={this.state.addPosition}>
									<div className="row">
										<label className="col-sm-3 banner_label">Bar number</label>
										<input type="text" className="col-sm-8" placeholder="Bar number" />
										<div className="about_link col-sm-1" onClick={() => {this.setState({ addPosition : 'addPositionFalse'})}}>Delete</div>
									</div>
									<div className="row">
										<label className="col-sm-3 banner_label">State</label>
										<select className="col-sm-3" placeholder="State">
											<option></option>
											<option></option>
										</select>
										<label className="col-sm-2 text-right">Admit</label>
										<select className="col-sm-4" placeholder="Admit">
											<option></option>
											<option></option>
										</select>
									</div>
								</div>
							</div>
							<div className="row text-right subpanel_footer col-sm-12">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(2)}>cancel</a>
								<a className="btn close_button">Save</a>
							</div>
						</div>
				}

				{
					!this.state.firmActive ?
						<div className={"row panel_item" + " " + this.state.greyState}>
							<div className="col-sm-3">Firm</div>
							<div className="col-sm-8">The Law Office of Leonard W. Moen, PLLC</div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(3)}>Edit</div>
						</div>
					:
						<div className="row panel_selectedItem">
							<div className="row subpanel_title">
								<div className="pull-left">Firm</div>
								<div className="pull-right cancel_link" onClick={() => this.unToggle(3)}>Close</div>
							</div>
							<div className="row subpanel_content">
								<div className="row">
									<label className="col-sm-3 banner_label">Firm</label>
									<input type="text" className="col-sm-9" placeholder="Firm" />
								</div>
							</div>
							<div className="row text-right subpanel_footer col-sm-12">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(3)}>cancel</a>
								<a className="btn close_button">Save</a>
							</div>
						</div>
				}

				{
					!this.state.addressActive ?
						<div className={"row panel_item" + " " + this.state.greyState}>
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
								<div className="pull-right cancel_link" onClick={() => this.unToggle(4)}>Close</div>
							</div>
							<div className="row subpanel_content">
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
							</div>
							<div className="row text-right subpanel_footer col-sm-12">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(4)}>cancel</a>
								<a className="btn close_button">Save</a>
							</div>
						</div>
				}

				{
					!this.state.phoneActive ?
						<div className={"row panel_item" + " " + this.state.greyState}>
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
								<div className="pull-right" style={{'display' : 'inline-flex'}}>
									<div className="cancel_link" onClick={() => {this.setState({ addPhone : 'addPhoneTrue' })}}>Add</div>
									<div>&nbsp; | &nbsp;</div>
									<div className="cancel_link" onClick={() => this.unToggle(5)}>Close</div>
								</div>
							</div>
							<div className="row subpanel_content">
								<div className="row">
									<label className="col-sm-3 banner_label">Phone</label>
									<input type="text" className="col-sm-9" placeholder="(206) 555-1234" />
								</div>
								<div className="row">
									<label className="col-sm-3 banner_label">Phone type</label>
									<select className="col-sm-6">
										<option>Office</option>
										<option>Home</option>
									</select>
									<label className="col-sm-1 banner_label">Ext</label>
									<select className="col-sm-2">
										<option>Office</option>
										<option>Home</option>
									</select>
								</div>
								<div className={this.state.addPhone}>
									<div className="row">
										<label className="col-sm-3 banner_label">Phone</label>
										<input type="text" className="col-sm-8" placeholder="Phone" />
										<div className="about_link col-sm-1" onClick={() => {this.setState({ addPhone : 'addPhoneFalse' })}}>Delete</div>
									</div>
									<div className="row">
										<label className="col-sm-3 banner_label">Phone type</label>
										<select className="col-sm-6" placeholder="Phone type">
											<option>Office</option>
											<option>Home</option>
										</select>
										<label className="col-sm-1 banner_label">Ext</label>
										<select className="col-sm-2">
											<option>Office</option>
											<option>Home</option>
										</select>
									</div>
								</div>
							</div>
							<div className="row text-right subpanel_footer col-sm-12">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(5)}>cancel</a>
								<a className="btn close_button" onClick={() => this.saveData()}>Save</a>
							</div>
						</div>

				}

				{
					!this.state.emailActive ?
						<div className={"row panel_item" + " " + this.state.greyState}>
							<div className="col-sm-3">Email</div>
							<div className="col-sm-8">Andrey@mail.com</div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(6)}>Edit</div>
						</div>
					:
						<div className="row panel_selectedItem">
							<div className="row subpanel_title">
								<div className="pull-left">Email</div>
								<div className="pull-right cancel_link" onClick={() => this.unToggle(6)}>Close</div>
							</div>
							<div className="row subpanel_content">
								<div className="row">
									<label className="col-sm-3 banner_label">Phone type</label>
									<input type="text" className="col-sm-9" placeholder="Phone type" />
								</div>
							</div>
							<div className="row text-right subpanel_footer col-sm-12">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(6)}>cancel</a>
								<a className="btn close_button">Save</a>
							</div>
						</div>
				}
				
				
			</section>
		);
	}
}

export default CustomAccordion;