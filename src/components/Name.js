import React, { useState } from "react";

// class Name extends Component {
//     state = { name: "Abantika Chandra!" };

//     constructor(props) {
//         super(props);
//         this.setName = this.setName.bind(this);
//     }

//     setName(e) {
//         this.setState({ ...this.state, name: "Amrit Anand" });

//         testHandler = () => {
//             console.log("testHandler");
//         };
// }

//     render() {
//         return (
//             <>
//             <h1>The name is: {this.state.name}</h1>
//             <button onClick={this.setName("Amrit Anand");
//         this.testHandler();}
//         >
//             Click Me!
//             </button>
//             </>
//         );
//     }
// }

const Name = () => {
    const [state, setState] = useState({name:"Abantika Chandra!"});

    let setName = (e) => {
        setState({ ...state, name: "Amrit Anand" });
    }

    return (
        <>
        <h1>The name is: {state.name}</h1>
        <button onClick={setName}>Click Me!</button>
        </>
    )
};

export default Name;