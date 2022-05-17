import React, {Component} from 'react';

export default class ChildComp extends Component {
    constructor(props) {
        super();
    }
    render() {
        return(
            <div>
                Namaku {this.props.nama}, 
                alamatku di {this.props.alamat},
                dan umurku {this.props.umur}
            </div>
        );
    }
}