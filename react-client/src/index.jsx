import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Form from './components/Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: ['test'],
      email: 'finance@renewalsv.org',
      threshold: 1000,
      formChange: {},
      isGoing: true,
      numberOfGuests: 2,
      // nameField: '',
      // emailField: '',
      // phoneField: '',
      // cityField: '',
      // stateField: '',
      // zipCodeField: ''
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange(event) {
    // const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;

    // this.setState({
    //   [name]: value
    // });

    var formChange = {}
    formChange[event.target.name] = event.target.value
    this.setState(formChange)
    console.log(JSON.stringify(formChange));

  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (<div>
      <h2>Reimbursement form</h2>
      <p>A few guidelines:</p>
      <ul>
        <li>Reimbursements should be made within <strong>30 days of the event.</strong></li>
        <li>Reimbursements totaling over <strong>${this.state.threshold} will require prior approval from the pastor.</strong></li>
        <li>You can email us at <a href={"mailto:" + this.state.email}>{this.state.email}</a> if you have any questions.</li>
      </ul>
      <Form isGoing={this.state.isGoing} numberOfGuests={this.state.numberOfGuests} handleInputChange={this.handleInputChange}/>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));