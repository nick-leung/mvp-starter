import React from 'react';

const Contact = (props) => (
  <div>
    <h3> Contact info </h3>
    <label>
      Name
      <input
        name="nameField"
        placeholder="John Smith"
        onChange={props.handleInputChange} 
        />
    </label>
    <br />
    <label>
      Email address
      <input
        name="emailField"
        defaultValue="john@smith.co"
        onChange={props.handleInputChange} 
        />
    </label>
    <br />
    <label>
      Phone number
      <input
        name="phoneField"
        placeholder="xxx-xxx-xxxx"
        onChange={props.handleInputChange} 
        />
    </label>
  </div>
)

export default Contact;