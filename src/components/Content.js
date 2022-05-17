import React, {Component} from 'react';
import ChildComp from './ChildComp';

export default class Content extends Component {
    constructor(props) {
        super();
        this.state = {
            numbers: [1, 2, 3, 4, 5]
        };
    };

    akbarMethod = () => {
        console.info("Akbar sedang belajar ReactJS");
        alert('Zikri ketua remas');
    }

    // componentDidMount = () => {
    //     this.akbarMethod(); 
    // }


    render() {
        const isStatus = false;

        if (isStatus === true) {
            console.log('Status is verified');
        } else {
            console.log('Status is not verified');
        };

        return(
            <div>
                {/* Child comp nama, umur, alamat */}
                Content component is works
                {/* <ChildComp nama="Perdly" umur="19" alamat="Bukittinngi" /> */}
                {/* <h2>Received name {this.props.name}</h2>
                <h2>Received age {this.props.age}</h2> */}
                {/* <button onClick={this.akbarMethod}>Click me</button> */}
                {this.state.numbers.map((val, index) => {
                    return  <li key={index}>{val}</li>
                })}
             </div>
        );
    };
};