import React, { Component } from 'react';
import style from './Content.module.css';
import * as styles from './css/Content';
import { Button, Accordion } from 'react-bootstrap';

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
        // const isStatus = false;

        // if (isStatus === true) {
        //     console.log('Status is verified');
        // } else {
        //     console.log('Status is not verified');
        // };

        return (
            <div>
                {/* Child comp nama, umur, alamat */}
                Content component is works
                {/* <ChildComp nama="Perdly" umur="19" alamat="Bukittinngi" /> */}
                {/* <h2>Received name {this.props.name}</h2>
                <h2>Received age {this.props.age}</h2> */}
                {/* <button onClick={this.akbarMethod}>Click me</button> */}
                {this.state.numbers.map((val, index) => {
                    return <li key={index}>{val}</li>
                })}

                <div className={style['Module']}>Aku warna biru</div>
                <p className={style['Content-title']}>Latif suka makan semangka</p>
                <styles.Button>Halo aku button</styles.Button>
                <styles.Line>Halo aku line</styles.Line>
                <Button variant="primary">Submit</Button>
                <Button variant="danger">Beware</Button>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    };
};