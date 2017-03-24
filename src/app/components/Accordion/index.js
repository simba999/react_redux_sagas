import React 			from 'react';
//import SplitButton 		from 'react-split-button';
import 
{
	MenuItem, 
	SplitButton,
	ButtonToolbar,
	Form,
	FormGroup,
	Col,
	FormControl,
	ControlLabel
}						from 'react-bootstrap';
//import {MenuItem} from 'rc-menu';
//import 'rc-menu/assets/index.css';
//import { ContextMenu, MenuItem} from "react-contextmenu";
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
						<Form horizontal className="panel_selectedItem">
							<FormGroup controlId="subpanel_title" className="subpanel_title">
								<ControlLabel className="pull-left">Name</ControlLabel>
								<ControlLabel className="pull-right cancel_link" onClick={() => this.unToggle(1)}>Close</ControlLabel>
							</FormGroup>

							<FormGroup className="row subpanel_content">
								<FormGroup>
									<Col className="banner_label" sm={3}>First name</Col>
									<Col sm={9}>
										<FormControl type="text" placeholder="First name"/>
									</Col>
								</FormGroup>

								<FormGroup>
									<Col className="banner_label" sm={3}>Middle name</Col>
									<Col sm={9}>
										<FormControl type="text" placeholder="Middle name" className="" />
									</Col>
								</FormGroup>

								<FormGroup>
									<Col className="banner_label" sm={3}>Last name</Col>
									<Col sm={4}>
										<FormControl type="text" placeholder="Last name" className="padding_right_middle" />
									</Col>
									<Col className="banner_label" sm={1}>Suffix</Col>
									<Col sm={4}>
										<FormControl componentClass="select" className="padding_right_middle">
											<option>Man</option>
											<option>Woman</option>
										</FormControl>
									</Col>
								</FormGroup>
							</FormGroup>
							<FormGroup className="row text-right subpanel_footer">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(1)}>cancel</a>
								<a className="btn close_button">Save</a>
							</FormGroup>
						</Form>
				}

				{
					!this.state.positionActive ?
						<div className={"row panel_item" + " " + this.state.greyState}>
							<div className="col-sm-3">Position</div>
							<div className="col-sm-8">Position</div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(2)}>Edit</div>
						</div>
					:
						<Form className="row panel_selectedItem">
							<FormGroup className="subpanel_title">
								<ControlLabel className="pull-left">Position</ControlLabel>
								<FormGroup className="pull-right" style={{ 'display' : 'inline-flex' }}>
									<ControlLabel className="cancel_link" onClick={() => {this.setState({ addPosition : 'addPositionTrue' })}}>Add</ControlLabel> 
									<ControlLabel>&nbsp; | &nbsp;</ControlLabel>
									<ControlLabel className="cancel_link" onClick={() => this.unToggle(2)}>Close</ControlLabel>
								</FormGroup>
								
							</FormGroup>
							<FormGroup className="subpanel_content">
								<FormGroup className="">
									<Col className="banner_label" sm={3}>Position</Col>
									<Col sm={9}>
										<FormControl componentClass="select" placeholder="Position">
											<option>Attorney</option>
											<option>Seattle</option>
										</FormControl>
									</Col>
								</FormGroup>

								<FormGroup className="">
									<Col className="banner_label" sm={3}>Bar number</Col>
									<Col sm={9}>
										<FormControl type="text" className="" />
									</Col>
									
								</FormGroup>

								<FormGroup className="">
									<Col className="banner_label" sm={3}>State</Col>
									<Col sm={3}>
										<FormControl componentClass="select" placeholder="">
											<option>WA</option>
											<option>MA</option>
										</FormControl>
									</Col>
									<Col className="text-right" sm={2}>Admit</Col>
									<ButtonToolbar className="split_button_tool col-sm-4">
										<SplitButton title="Dropdown right" className="split_button" bsStyle="combo" pullRight id="split_click">
										    <MenuItem eventKey="1">Action</MenuItem>
										    <MenuItem eventKey="2">Another action</MenuItem>
										    <MenuItem eventKey="3">Something else here</MenuItem>
										    <MenuItem divider />
										    <MenuItem eventKey="4">Separated link</MenuItem>
										 </SplitButton>
									</ButtonToolbar>
								</FormGroup>

								<FormGroup className={this.state.addPosition}>
									<FormGroup className="">
										<Col className="banner_label" sm={3}>Bar number</Col>
										<Col className="" sm={8}>
											<FormControl type="text" className="" placeholder="Bar number" />
										</Col>
										
										<ControlLabel className="about_link col-sm-1" onClick={() => {this.setState({ addPosition : 'addPositionFalse'})}}>Delete</ControlLabel>
									</FormGroup>

									<FormGroup className="">
										<Col className="banner_label" sm={3}>State</Col>
										<Col sm={3}>
											<FormControl componentClass="select" placeholder="State">
												<option></option>
												<option></option>
											</FormControl>
										</Col>
										<Col className="text-right" sm={2}>Admit</Col>
										<Col sm={4}>
											<FormControl componentClass="select" placeholder="Admit">
												<option></option>
												<option></option>
											</FormControl>
										</Col>
									</FormGroup>
								</FormGroup>
							</FormGroup>
							<FormGroup className="row text-right subpanel_footer">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(2)}>cancel</a>
								<a className="btn close_button">Save</a>
							</FormGroup>
						</Form>
				}

				{
					!this.state.firmActive ?
						<div className={"row panel_item" + " " + this.state.greyState}>
							<div className="col-sm-3">Firm</div>
							<div className="col-sm-8">The Law Office of Leonard W. Moen, PLLC</div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(3)}>Edit</div>
						</div>
					:
						<Form className="row panel_selectedItem">
							<FormGroup className="subpanel_title">
								<ControlLabel className="pull-left">Firm</ControlLabel>
								<ControlLabel className="pull-right cancel_link" onClick={() => this.unToggle(3)}>Close</ControlLabel>
							</FormGroup>

							<FormGroup className="subpanel_content">
								<FormGroup className="">
									<Col className="banner_label" sm={3}>Firm</Col>
									<Col sm={9}>
										<FormControl type="text" placeholder="Firm" />
									</Col>
								</FormGroup>
							</FormGroup>

							<FormGroup className="text-right subpanel_footer">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(3)}>cancel</a>
								<a className="btn close_button">Save</a>
							</FormGroup>
						</Form>
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
						<Form className="row panel_selectedItem">
							<FormGroup className="subpanel_title">
								<ControlLabel className="pull-left">Address</ControlLabel>
								<ControlLabel className="pull-right cancel_link" onClick={() => this.unToggle(4)}>Close</ControlLabel>
							</FormGroup>
							<FormGroup className="subpanel_content">
								<FormGroup>
									<Col className="banner_label" sm={3}>Address1</Col>
									<Col sm={9}>
										<FormControl type="text" placeholder="Address1" />
									</Col>
								</FormGroup>

								<FormGroup>
									<Col className="banner_label" sm={3}>Address2</Col><Col sm={9}>
										<FormControl type="text" placeholder="Address2" />
									</Col>
								</FormGroup>

								<FormGroup>
									<Col className="banner_label" sm={3}>City</Col><Col sm={9}>
										<FormControl type="text" placeholder="City" />
									</Col>
								</FormGroup>

								<FormGroup>
									<Col className="banner_label" sm={3}>State</Col><Col sm={9}>
										<FormControl type="text" placeholder="State" />
									</Col>
								</FormGroup>

								<FormGroup>
									<Col className="banner_label" sm={3}>Zip</Col>
									<Col sm={9}>
										<FormControl componentClass="select" placeholder="Zip code">
											<option>WA</option>
											<option>MA</option>
										</FormControl>
									</Col>
								</FormGroup>
							</FormGroup>
							<FormGroup className="text-right subpanel_footer">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(4)}>cancel</a>
								<a className="btn close_button">Save</a>
							</FormGroup>
						</Form>
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
						<Form className="row panel_selectedItem">
							<FormGroup className="subpanel_title">
								<ControlLabel className="pull-left">Phone</ControlLabel>
								<FormGroup className="pull-right" style={{'display' : 'inline-flex'}}>
									<ControlLabel className="cancel_link" onClick={() => {this.setState({ addPhone : 'addPhoneTrue' })}}>Add</ControlLabel>
									<ControlLabel>&nbsp; | &nbsp;</ControlLabel>
									<ControlLabel className="cancel_link" onClick={() => this.unToggle(5)}>Close</ControlLabel>
								</FormGroup>
							</FormGroup>
							<FormGroup className="subpanel_content">
								<FormGroup>
									<Col className="banner_label" sm={3}>Phone</Col>
									<Col sm={9}>
										<FormControl type="text" placeholder="(206) 555-1234" />
									</Col>
								</FormGroup>

								<FormGroup>
									<Col className="banner_label" sm={3}>Phone type</Col>
									<Col sm={6}>
										<FormControl componentClass="select" placeholder="">
											<option>Office</option>
											<option>Home</option>
										</FormControl>
									</Col>
									<Col className="banner_label" sm={1}>Ext</Col>
									<Col sm={2}>
										<FormControl componentClass="select" placeholder="">
											<option>Office</option>
											<option>Home</option>
										</FormControl>
									</Col>
								</FormGroup>

								<FormGroup className={this.state.addPhone}>
									<FormGroup>
										<Col className="banner_label" sm={3}>Phone</Col>
										<Col sm={8}>
											<FormControl type="text" className="col-sm-8" placeholder="Phone" />
										</Col>
										<Col sm={1}>
											<ControlLabel className="about_link" onClick={() => {this.setState({ addPhone : 'addPhoneFalse' })}}>Delete</ControlLabel>
										</Col>
									</FormGroup>

									<FormGroup>
										<Col className="banner_label" sm={3}>Phone type</Col>
										<Col sm={6}>
											<FormControl componentClass="select" placeholder="Phone type">
												<option>Office</option>
												<option>Home</option>
											</FormControl>
										</Col>
										<Col className="banner_label" sm={1}>Ext</Col>
										<Col sm={2}>
											<FormControl componentClass="select" className="">
												<option>Office</option>
												<option>Home</option>
											</FormControl>
										</Col>
									</FormGroup>
								</FormGroup>
							</FormGroup>
							<FormGroup className="text-right subpanel_footer">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(5)}>cancel</a>
								<a className="btn close_button" onClick={() => this.saveData()}>Save</a>
							</FormGroup>
						</Form>

				}

				{
					!this.state.emailActive ?
						<div className={"row panel_item" + " " + this.state.greyState}>
							<div className="col-sm-3">Email</div>
							<div className="col-sm-8">Andrey@mail.com</div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(6)}>Edit</div>
						</div>
					:
						<Form className="row panel_selectedItem">
							<FormGroup className="subpanel_title">
								<ControlLabel className="pull-left">Email</ControlLabel>
								<ControlLabel className="pull-right cancel_link" onClick={() => this.unToggle(6)}>Close</ControlLabel>
							</FormGroup>

							<FormGroup className="subpanel_content">
								<FormGroup>
									<Col className="banner_label" sm={3}>Phone type</Col>
									<Col sm={9}>
										<FormControl type="text" placeholder="Phone type" />
									</Col>
								</FormGroup>
							</FormGroup>

							<FormGroup className="text-right subpanel_footer">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(6)}>cancel</a>
								<a className="btn close_button">Save</a>
							</FormGroup>
						</Form>
				}
				
				
			</section>
		);
	}
}

export default CustomAccordion;