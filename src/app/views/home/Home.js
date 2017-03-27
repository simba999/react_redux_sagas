import React, {
  PureComponent,
  PropTypes
}                             from 'react';
import {Jumbotron}            from '../../components';
import AnimatedView           from '../../components/animatedView/AnimatedView';
import { Link }               from 'react-router';
import ChartBox               from '../../components/ChartBox';
import RightSideBox           from '../../components/RightSideBox';
import ModalBox               from '../../components/ModalBox';       

class Home extends PureComponent {

  constructor(props, context) {

    super(props, context);

    this.state = {
      openModalState    : false,
      homeActive        : false,
      opencaseActive    : false,
      closeclaimActive  : false,
      reportsActive     : false,
    }

    const { enterHome, clickMenu } = this.props;
  }

  componentDidMount() {
    const { enterHome, clickMenu } = this.props;
    // console.log("Home: ", clickMenu);
    enterHome();
    // clickMenu();
    var currentView = this.props.currentView;

    // switch( currentView ) {
    //   case 'home':
    //     var currentElement         = document.getElementById('navbar_home').parentElement.setAttribute("class", 'active');
    //     console.log("currentDFSDFS:", currentElement);
    //     break;
    //   case 'opencase':
    //     var currentElement         = document.getElementById('navbar_opencase').parentElement.setAttribute("class", 'active');
    //     console.log("currentDFSDFS:", currentElement);
    //     break;
    //   default:
    //     break;
    // }
    console.log("CurrnetView: ", this.props.currentView);
  }

  componentWillUnmount() {
    const { leaveHome } = this.props;
    leaveHome();
  }

  openModal() {
    this.setState({openModalState: true});
    console.log("Open modal pressed");
    clickMenu();
  }

  removeModal() {
    this.setState({openModalState : false});
  }

  render() {
    return(
 
        <div className="container homepage">
          <div className="opencase_margin">
            <div className="col-sm-9 left_panel_one">
              <ChartBox title="Chart" content=""></ChartBox>
            </div>
            <div className="col-sm-3 right_panel_one">
              <RightSideBox></RightSideBox>
            </div>
          </div>  
        </div>


    );
  }
}

Home.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterHome:    PropTypes.func.isRequired,
  leaveHome:    PropTypes.func.isRequired
};

export default Home;
