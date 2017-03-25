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
	ControlLabel,
	Button,
}						from 'react-bootstrap';

import {findDOMNode} 		from 'react-dom';
//import {Autobind} 		from 'es-decorators';
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
			active 								: false,
			nameActive 							: false,
			positionActive 						: false,
			addressActive						: false,
			firmActive							: false,
			phoneActive							: false,
			emailActive 						: false,

			greyState							: '',
			addPosition 						: 'addPositionFalse',
			addPhone 							: 'addPhoneFalse',

			nameData							: {},
			positionData						: {},
			firmData							: {},
			phoneData							: {},
			emailData							: {},
			addressData							: {},
			profileStyle						: {},

			presentName 						: 'Name',
			presentPosition 					: 'Postion',
			presentAddress1 					: 'Address1',
			presentAddress2 					: 'Address2',
			presentExtra	 					: 'City, State, Zip',
			presentEmail 						: 'Email',
			presentMobilePhone					: 'Mobile: (206) 555-1234',
			presentOfficePhone 					: 'Office: (206) 555-1234 x 100',
			presentFirm 						: 'Firm'
		}

		this.toggle 							= this.toggle.bind(this);
		this.nameSave 							= this.nameSave.bind(this);
		this.positionSave 						= this.positionSave.bind(this);
		this.firmSave							= this.firmSave.bind(this);
		this.addressSave 						= this.addressSave.bind(this);
		this.phoneSave 							= this.phoneSave.bind(this);
		this.emailSave 							= this.emailSave.bind(this);

		this.clearAllStyle 						= this.clearAllStyle.bind(this);
		this.setStyle							= this.setStyle.bind(this);
	}

	componentWillMount() {
		let style = ''; 

		// Name Section
		if (this.state.greyState == '' && this.state.nameData.firstName !== undefined) {
			style = '';
		}
		else {
			style = 'grey';
		}

		if (this.state.nameData.firstName !== undefined) {
			for (const field in this.state.nameData) {
				this.state.presentName 				+= this.state.nameData.field + " ";
			}
		}
		else {
			this.state.presentName 					= 'Name';
		}

		this.state.profileStyle.nameStyle 			= style;

		// Position Section
		!this.state.positionData ? 
			this.state.profileStyle.positionStyle 	= ''
		:
			this.state.profileStyle.positionStyle 	= 'grey'

		// Firm Section
		!this.state.firmData ? 
			this.state.profileStyle.firmStyle 		= ''
		:
			this.state.profileStyle.firmStyle 		= 'grey'

		// Phone Section
		!this.state.phoneData ? 
			this.state.profileStyle.phoneStyle 		= ''
		:
			this.state.profileStyle.phoneStyle 		= 'grey'

		// Email Section
		!this.state.emailData ? 
			this.state.profileStyle.emailStyle 		= ''
		:
			this.state.profileStyle.emailStyle 		= 'grey'

		// Address Section
		!this.state.addressData ? 
			this.state.profileStyle.addressStyle 	= ''
		:
			this.state.profileStyle.addressStyle 	= 'grey'

		//console.log("DD: ", sizeof(this.state.addressData));

	}

	clearAllStyle() {
		console.log("clearAllStyle");
		for (let key in this.state.profileStyle) {
			this.state.profileStyle[key] = 'grey';
		}
	}

	setStyle() {
		if (Object.keys(this.state.nameData).length != 0) 
			this.state.profileStyle.nameStyle = ''; 
		else 
			this.state.profileStyle.nameStyle = 'grey';
		if (Object.keys(this.state.positionData).length != 0) 
			this.state.profileStyle.positionStyle = ''; 
		else 
			this.state.profileStyle.positionStyle = 'grey';

		if (Object.keys(this.state.firmData).length != 0) this.state.profileStyle.firmStyle = '';
		if (Object.keys(this.state.emailData).length != 0) this.state.profileStyle.emailStyle = '';
		if (Object.keys(this.state.phoneData).length != 0) this.state.profileStyle.phoneStyle = '';
		if (Object.keys(this.state.addressData).length != 0) this.state.profileStyle.addressStyle = '';
	}

	toggle(id) {
		console.log("ID: ", id);
		switch(id) {
			case 1: // When Name Field is activated
				this.setState({ active 			: true });
				this.setState({ positionActive 	: false });
				this.setState({ firmActive 		: false });
				this.setState({ addressActive 	: false});
				this.setState({ phoneActive 	: false });
				this.setState({ emailActive 	: false });
				this.clearAllStyle();
				break;
			case 2: // When Position Field is activated
				this.setState({ positionActive 	: true });
				this.setState({ active 			: false });
				this.setState({ firmActive 		: false });
				this.setState({ addressActive 	: false});
				this.setState({ phoneActive 	: false });
				this.setState({ emailActive 	: false });
				this.clearAllStyle();
				break;
			case 3: // When Firm Field is activated
				this.setState({ firmActive 		: true });
				this.setState({ active 			: false });
				this.setState({ positionActive 	: false });
				this.setState({ addressActive 	: false});
				this.setState({ phoneActive 	: false });
				this.setState({ emailActive 	: false });
				this.clearAllStyle();
				break;
			case 4: // // When Address Field is activated
				this.setState({ addressActive 	: true});
				this.setState({ firmActive 		: false });
				this.setState({ active 			: false });
				this.setState({ positionActive 	: false });
				this.setState({ phoneActive 	: false });
				this.setState({ emailActive 	: false });
				this.clearAllStyle();
				break;
			case 5: // When Phone Field is activated
				this.setState({ phoneActive 	: true });
				this.setState({ addressActive 	: false });
				this.setState({ firmActive 		: false });
				this.setState({ active 			: false });
				this.setState({ positionActive 	: false });
				this.setState({ emailActive 	: false });
				this.clearAllStyle();
				break;
			case 6: // When Phone Field is activated
				this.setState({ emailActive 	: true });
				this.setState({ phoneActive 	: false });
				this.setState({ addressActive 	: false });
				this.setState({ firmActive 		: false });
				this.setState({ active 			: false });
				this.setState({ positionActive 	: false });
				this.clearAllStyle();
				break;
			default:
				break;
		}
	}

	unToggle(id) {
		switch(id) {
			case 1:
				this.setState({ active: false });
				this.setStyle();
				break;
			case 2:
				this.setState({ positionActive: false });
				this.setStyle();
				break;
			case 3:
				this.setState({ firmActive : false });
				this.setStyle();
				break;
			case 4:
				this.setState({ addressActive : false });
				this.setStyle();
				break;
			case 5:
				this.setState({ phoneActive : false });
				this.setStyle();
				break;
			case 6:
				this.setState({ emailActive : false });
				this.setStyle();
				break;
			default:
				break;
		}
		
	}

	saveData() {

	}

	nameSave(e) {
		e.preventDefault();
    
	    const nameData 							= {};
	
	    for (let field in this.refs) {
		      nameData[field] 					= findDOMNode(this.refs[field]).value;
	    }

	    this.setState({ nameData: nameData});
	    this.state.profileStyle.nameStyle 		= ''; 

	    this.state.presentName 					= '';

	    for (let key in nameData) {
	    	this.state.presentName 				+= nameData[key] + " ";
	    } 

		
		this.setStyle();
		this.state.active  = false;
	}

	positionSave(e) {
		e.preventDefault();
    	console.log("Position Data");
	    const nameData 							= {};
	
	    for (let field in this.refs) {
		      nameData[field] 					= findDOMNode(this.refs[field]).value;
	    }

	    this.setState({ positionData: nameData});
	    
	    this.state.profileStyle.positionStyle 	= '';
	    this.state.presentPosition 				= '';
	    this.state.presentPosition 				= nameData['positionOrigin'] + " " + "Bar" + " " + nameData['positionStateOrigin'] + nameData['barNumberOrigin'];
	    

	    console.log("Data: ", nameData);
	    this.setStyle();
	    this.state.positionActive 				= false;
	}

	firmSave() {
		e.preventDefault();
		console.log("Firm Data");
	    const nameData 							= {};
	
	    for (let field in this.refs) {
		      nameData[field] 					= findDOMNode(this.refs[field]).value;
	    }

	    this.setState({ firmData: nameData});

	    this.state.profileStyle.firmStyle 		= '';
	    this.state.presentFirm	 				= nameData['firm'];

	    this.setStyle();
	    this.state.firmActive 					= false;
	    
	}

	addressSave() {
		e.preventDefault();

		const nameData 							= {};
	
	    for (let field in this.refs) {
		      nameData[field] 					= findDOMNode(this.refs[field]).value;
	    }

	    this.setState({ addressData: nameData});

	    this.state.profileStyle.addressStyle	= '';
	    this.state.presentAddress1 				= nameData['address1'];
	    this.state.presentAddress2 				= nameData['address2'];
	    this.state.presentExtra	 				= nameData['city'] + " , " + nameData['addressState'] + " , " + nameData['zipcode'];

	    this.state.addressActive				= false;
	    this.setStyle();
	}

	phoneSave() {
		e.preventDefault();

		const nameData 							= {};
	
	    for (let field in this.refs) {
		      nameData[field] 					= findDOMNode(this.refs[field]).value;
	    }

	    this.setState({ phoneData: nameData});

	    this.state.profileStyle.phoneStyle		= '';
	    //this.state.presentMobilePhone			= nameData['phoneKind1'] + ": " + nameData['number1'];

	    console.log("namdData1: ", nameData);

	    // if (nameData['phoneExt1'] == '') {
	    // 	this.stat.presentMobilePhone 		+= nameData['phoneExt1']; 
	    // }

	    // if (this.state.addPhoe === "addPhoneTrue")
	    // 	this.state.presentOfficePhone		= nameData['phoneKind2'] + ": " + nameData['number2'];

	    // if (nameData['phoneExt2'] == '') {
	    // 	this.stat.presentOfficePhone 		+= nameData['phoneExt2']; 
	    // }

	    //this.state.phoneActive					= false;
	    
	    this.setStyle();
	    this.setState({ phoneActive : false });
	}

	emailSave() {
		e.preventDefault();

		const nameData 							= {};
	
	    for (let field in this.refs) {
		      nameData[field] 					= findDOMNode(this.refs[field]).value;
	    }

	    this.setState({ emailData: nameData});

	    this.state.profileStyle.emailStyle 		= '';
	    this.state.presentEmail	 				= nameData['emailValue'];

	    console.log("presentEmail: ", nameData);

	    
	    this.setStyle();
	    this.state.emailActive 					= false;
	}


	render() {
		return (

			<section className="row accordion">
				{
					!this.state.active ?
						<div className={"row panel_item" + " " + this.state.profileStyle.nameStyle}>
							<div className="col-sm-3">Name</div>
							<div className="col-sm-8">
								{ this.state.presentName }	
							</div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(1)}>Edit</div>
						</div>
					:
						<Form horizontal className="panel_selectedItem" onSubmit={this.nameSave}>
							<FormGroup controlId="subpanel_title" className="subpanel_title">
								<ControlLabel className="pull-left">Name</ControlLabel>
								<ControlLabel className="pull-right cancel_link" onClick={() => this.unToggle(1)}>Close</ControlLabel>
							</FormGroup>

							<FormGroup className="row subpanel_content">
								<FormGroup>
									<Col className="banner_label" sm={3}>First name</Col>
									<Col sm={9}>
										<FormControl type="text" placeholder="First name" ref="firstName" name="firstName" />
									</Col>
								</FormGroup>

								<FormGroup>
									<Col className="banner_label" sm={3}>Middle name</Col>
									<Col sm={9}>
										<FormControl type="text" placeholder="Middle name" ref="middleName" name="middleName"  />
									</Col>
								</FormGroup>

								<FormGroup>
									<Col className="banner_label" sm={3}>Last name</Col>
									<Col sm={4}>
										<FormControl type="text" placeholder="Last name" ref="lastName" name="lastName" />
									</Col>
									<Col className="banner_label" sm={1}>Suffix</Col>
									<Col sm={4}>
										<FormControl componentClass="select" className="">
											<option>Man</option>
											<option>Woman</option>
										</FormControl>
									</Col>
								</FormGroup>
							</FormGroup>
							<FormGroup className="row text-right subpanel_footer">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(1)}>cancel</a>
								<Button className="btn close_button" type="submit">Save</Button>
							</FormGroup>
						</Form>
				}

				{
					!this.state.positionActive ?
						<div className={"row panel_item" + " " + this.state.profileStyle.positionStyle}>
							<div className="col-sm-3">Position</div>
							<div className="col-sm-8">{this.state.presentPosition}</div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(2)}>Edit</div>
						</div>
					:
						<Form className="row panel_selectedItem" onSubmit={this.positionSave}>
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
										<FormControl componentClass="select" placeholder="Position" ref="positionOrigin">
											<option>Attorney</option>
											<option>Seattle</option>
										</FormControl>
									</Col>
								</FormGroup>

								<FormGroup className="">
									<Col className="banner_label" sm={3}>Bar number</Col>
									<Col sm={9}>
										<FormControl type="text" ref="barNumberOrigin" className="" />
									</Col>
									
								</FormGroup>

								<FormGroup className="">
									<Col className="banner_label" sm={3}>State</Col>
									<Col sm={3}>
										<FormControl componentClass="select" placeholder="" ref="positionStateOrigin">
											<option>WA</option>
											<option>OR</option>
											<option>NV</option>
										</FormControl>
									</Col>
									<Col className="text-right" sm={2}>Admit</Col>
									<Col sm={4}>
										<FormControl componentClass="select" placeholder="" ref="positionAdmitOrigin">
											<option>12-05-85</option>
											<option>11-10-85</option>
										</FormControl>
									</Col>
								</FormGroup>

								<FormGroup className={this.state.addPosition}>
									<FormGroup className="">
										<Col className="banner_label" sm={3}>Bar number</Col>
										<Col className="" sm={8}>
											<FormControl type="text" className="" placeholder="Bar number" ref="barNumberAdditional" />
										</Col>
										
										<ControlLabel className="about_link col-sm-1" onClick={() => {this.setState({ addPosition : 'addPositionFalse'})}}>Delete</ControlLabel>
									</FormGroup>

									<FormGroup className="">
										<Col className="banner_label" sm={3}>State</Col>
										<Col sm={3}>
											<FormControl componentClass="select" placeholder="State" ref="positionStateAdditional">
												<option></option>
												<option></option>
											</FormControl>
										</Col>
										<Col className="text-right" sm={2}>Admit</Col>
										<Col sm={4}>
											<FormControl componentClass="select" placeholder="Admit" ref="positionAdmitAdditional">
												<option></option>
												<option></option>
											</FormControl>
										</Col>
									</FormGroup>
								</FormGroup>
							</FormGroup>
							<FormGroup className="row text-right subpanel_footer">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(2)}>cancel</a>
								<Button className="btn close_button" type="submit">Save</Button>
							</FormGroup>
						</Form>
				}

				{
					!this.state.firmActive ?
						<div className={"row panel_item" + " " + this.state.profileStyle.firmStyle}>
							<div className="col-sm-3">Firm</div>
							<div className="col-sm-8"> { this.state.presentFirm } </div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(3)}>Edit</div>
						</div>
					:
						<Form className="row panel_selectedItem" onSubmit={this.firmSave}>
							<FormGroup className="subpanel_title">
								<ControlLabel className="pull-left">Firm</ControlLabel>
								<ControlLabel className="pull-right cancel_link" onClick={() => this.unToggle(3)}>Close</ControlLabel>
							</FormGroup>

							<FormGroup className="subpanel_content">
								<FormGroup className="">
									<Col className="banner_label" sm={3}>Firm</Col>
									<Col sm={9}>
										<FormControl type="text" placeholder="Firm" ref="firm"/>
									</Col>
								</FormGroup>
							</FormGroup>

							<FormGroup className="text-right subpanel_footer">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(3)}>cancel</a>
								<Button className="btn close_button" type="submit">Save</Button>
							</FormGroup>
						</Form>
				}

				{
					!this.state.addressActive ?
						<div className={"row panel_item" + " " + this.state.profileStyle.addressStyle}>
							<div className="col-sm-3"> Address </div>
							<div className="col-sm-8">
								<div> { this.state.presentAddress1 } </div>
								<div> { this.state.presentAddress2 } </div>
								<div> { this.state.presentExtra } </div>
							</div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(4)}>Edit</div>
						</div>
					:
						<Form className="row panel_selectedItem" onSubmit={this.addressSave}>
							<FormGroup className="subpanel_title">
								<ControlLabel className="pull-left">Address</ControlLabel>
								<ControlLabel className="pull-right cancel_link" onClick={() => this.unToggle(4)}>Close</ControlLabel>
							</FormGroup>
							<FormGroup className="subpanel_content">
								<FormGroup>
									<Col className="banner_label" sm={3}>Address1</Col>
									<Col sm={9}>
										<FormControl type="text" placeholder="Address1" ref="address1" />
									</Col>
								</FormGroup>

								<FormGroup>
									<Col className="banner_label" sm={3}>Address2</Col><Col sm={9}>
										<FormControl type="text" placeholder="Address2" ref="address2" />
									</Col>
								</FormGroup>

								<FormGroup>
									<Col className="banner_label" sm={3}>City</Col><Col sm={9}>
										<FormControl type="text" placeholder="City" ref="city" />
									</Col>
								</FormGroup>

								<FormGroup>
									<Col className="banner_label" sm={3}>State</Col><Col sm={9}>
										<FormControl type="text" placeholder="State" ref="addressState" />
									</Col>
								</FormGroup>

								<FormGroup>
									<Col className="banner_label" sm={3}>Zip</Col>
									<Col sm={9}>
										<FormControl componentClass="select" placeholder="Zip code" ref="zipcode">
											<option>WA</option>
											<option>MA</option>
										</FormControl>
									</Col>
								</FormGroup>
							</FormGroup>
							<FormGroup className="text-right subpanel_footer">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(4)}>cancel</a>
								<Button className="btn close_button" type="submit">Save</Button>
							</FormGroup>
						</Form>
				}

				{
					!this.state.phoneActive ?
						<div className={"row panel_item" + " " + this.state.profileStyle.phoneStyle}>
							<div className="col-sm-3">Phone</div>
							<div className="col-sm-8">
								<div> { this.state.presentMobilePhone } </div>
								<div> { this.state.presentOfficePhone } </div>
							</div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(5)}>Edit</div>
						</div>
					: 
						<Form className="row panel_selectedItem" onSubmit={this.phoneSave}>
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
										<FormControl type="text" placeholder="(206) 555-1234" ref="number1"/>
									</Col>
								</FormGroup>

								<FormGroup>
									<Col className="banner_label" sm={3}>Phone type</Col>
									<Col sm={6}>
										<FormControl componentClass="select" placeholder="" ref="phoneKind1">
											<option>Office</option>
											<option>Home</option>
										</FormControl>
									</Col>
									<Col className="banner_label" sm={1}>Ext</Col>
									<Col sm={2}>
										<FormControl type="text" placeholder="" ref="phoneExt1" />
									</Col>
								</FormGroup>

								<FormGroup className={this.state.addPhone}>
									<FormGroup>
										<Col className="banner_label" sm={3}>Phone</Col>
										<Col sm={8}>
											<FormControl type="text" className="col-sm-8" placeholder="Phone" ref="number2" />
										</Col>
										<Col sm={1}>
											<ControlLabel className="about_link" onClick={() => {this.setState({ addPhone : 'addPhoneFalse' })}}>Delete</ControlLabel>
										</Col>
									</FormGroup>

									<FormGroup>
										<Col className="banner_label" sm={3}>Phone type</Col>
										<Col sm={6}>
											<FormControl componentClass="select" placeholder="Phone type" ref="phoneKind2">
												<option>Office</option>
												<option>Home</option>
											</FormControl>
										</Col>
										<Col className="banner_label" sm={1}>Ext</Col>
										<Col sm={2}>
											<FormControl componentClass="select" className="" ref="phoneExt2" />
										</Col>
									</FormGroup>
								</FormGroup>
							</FormGroup>
							<FormGroup className="text-right subpanel_footer">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(5)}>cancel</a>
								<Button className="btn close_button" type="submit">Save</Button>
							</FormGroup>
						</Form>

				}

				{
					!this.state.emailActive ?
						<div className={"row panel_item" + " " + this.state.profileStyle.emailStyle}>
							<div className="col-sm-3">Email</div>
							<div className="col-sm-8"> { this.state.presentEmail } </div>
							<div className="col-sm-1 panel_link" onClick={() => this.toggle(6)}>Edit</div>
						</div>
					:
						<Form className="row panel_selectedItem" onSubmit={this.emailSave}>
							<FormGroup className="subpanel_title">
								<ControlLabel className="pull-left">Email</ControlLabel>
								<ControlLabel className="pull-right cancel_link" onClick={() => this.unToggle(6)}>Close</ControlLabel>
							</FormGroup>

							<FormGroup className="subpanel_content">
								<FormGroup>
									<Col className="banner_label" sm={3}>Email</Col>
									<Col sm={9}>
										<FormControl type="text" placeholder="Email" ref="emailValue"/>
									</Col>
								</FormGroup>
							</FormGroup>

							<FormGroup className="text-right subpanel_footer">
								<a className="about_link cancel_link" style={{paddingRight : '2em'}} onClick={() => this.unToggle(6)}>cancel</a>
								<Button className="btn close_button" type="submit">Save</Button>
							</FormGroup>
						</Form>
				}
				
				
			</section>
		);
	}
}

export default CustomAccordion;