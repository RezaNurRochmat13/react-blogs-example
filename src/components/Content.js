import React, {Component} from 'react';

export default class Content extends Component {
    constructor(props) {
        super();
    };

    render() {
        return(
            <div>
                Content component is works
                <h2>Received name {this.props.name}</h2>
                <h2>Received age {this.props.age}</h2>
             </div>
        );
    };
};