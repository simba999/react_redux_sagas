import React, { Component, PropTypes }    from 'react';
import WizardFormFirstPage                from './WizardFormFirstPage';
import WizardFormSecondPage               from './WizardFormSecondPage';
import WizardFormThirdPage                from './WizardFormThirdPage';
import WizardFormForthPage                from './WizardFormForthPage';
import WizardFormFifthPage                from './WizardFormFifthPage';


class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage       = this.nextPage.bind(this)
    this.previousPage   = this.previousPage.bind(this)
    this.showStep       = this.showStep.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  showStep() {
    switch(this.state.page) {
      case 1:
        return <WizardFormFirstPage nextPage={this.nextPage}/>
      case 2:
        return <WizardFormSecondPage previousPage={this.previousPage} nextPage={this.nextPage} />
      case 3:
        return <WizardFormThirdPage previousPage={this.previousPage} nextPage={this.nextPage} />
      case 4:
        return <WizardFormForthPage previousPage={this.previousPage} nextPage={this.nextPage} />
      case 5:
        return <WizardFormFifthPage previousPage={this.previousPage} nextPage={this.nextPage} />
    }
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div>
        <div className="modal-backdrop fade in"></div>
        <div className="dev modal fade in">
        {this.showStep()}
        </div>
      </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func
}

export default WizardForm