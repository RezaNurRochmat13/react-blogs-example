import React, {Component} from 'react';

// Class component
class Header extends Component {
    constructor(props) {
        super();
        this.state = {
            name: "Sulthan",
            user: {}
        };
    };

    render() {
        return (
            <div>
                <h1>My name is {this.state.name}</h1>
                <h2>Received addres on header component {this.props.address}</h2>
                {/* <button onClick={this.setName}>Change my name</button> */}
            </div>
        )
    }
};

// Functional component
// const Header = () => {
//     return <div>Bayu suka makan pempek</div>
// };

export default Header;