import React, { useState } from "react";

const UserDetails = ({ user = {} }) => {
    // props.user ={ name: "Alex", email: "alex@gmail.com", phoneNumber: "+91-9876543210"};
    const [h1Test, setH1Text] = useState("");
    return (
        <div>
            <h3>{user.name}</h3>
            <h5>Email: {user.email}<br/>Phone Number: {user.phoneNumber}</h5>
            <h1>{h1Text}</h1>
            <button onClick = {(e) => {
                setH1Text("This is Cipher Schools");
            }}
            >
                Click Me!
            </button>
        </div>
    );
};


// class UserDetails extends Component {
//     user = this.props.user;

//     render() {
//         return (
//                     <div>
//                         <h3>{this.user.name}</h3>
//                         <h5>Email: {this.user.email}<br/>Phone Number: {this.user.phoneNumber}</h5>
//                     </div>
//                 );
//             }
//     }


export default UserDetails;