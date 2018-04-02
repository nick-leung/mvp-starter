import React from 'react';
import Contact from './Contact.jsx';
import Address from './Address.jsx';

// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   isGoing: true,
//     //   numberOfGuests: 2
//     // };

//     // this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   // handleInputChange(event) {
//   //   const target = event.target;
//   //   const value = target.type === 'checkbox' ? target.checked : target.value;
//   //   const name = target.name;

//   //   this.setState({
//   //     [name]: value
//   //   });
//   // }

//   render() {
//     return (
//       // <div>
//       //   </div>
//       <form>
//         <label>
//           Is going:
//           <input
//             name="isGoing"
//             type="checkbox"
//             defaultValue={this.props.isGoing}
//             onChange={this.props.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Number of guests:
//           <input
//             name="numberOfGuests"
//             // value={this.props.numberOfGuests}
//             defaultValue="Search..."
//             onChange={this.props.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <Reservation />,
//   document.getElementById('root')
// );

const Form = (props) => (
  <div>
    {/* <h4> List Component </h4>   */}
    <form>
    {/* <label>
      Is going:
      <input
        name="isGoing"
        type="checkbox"
        defaultValue={props.isGoing}
        onChange={props.handleInputChange} 
        />
    </label>
    <br />
    <label>
      Number of guests:
      <input
        name="numberOfGuests"
        // value={props.numberOfGuests}
        defaultValue="Search..."
        onChange={props.handleInputChange}
        />
    </label> */}
    <Contact handleInputChange={props.handleInputChange}/>
    <Address handleInputChange={props.handleInputChange}/>
  </form>
  </div>
)

export default Form;