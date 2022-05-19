import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';

export default class Car extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount = () => {
        this.getAllCars();
    }

    getAllCars = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({ users: response.data });
                console.info("STATE : ", this.state.users);
            }).catch(err => {
                console.error('CANT CONNECT API : ', err);
            });
    }

    createNewPosts = () => {
        const postPayload = {
            title: 'Lorem ipsum',
            body: '-',
            userId: 1
        };

        axios.post('https://jsonplaceholder.typicode.com/posts',
         postPayload).then(response => {
            console.info(response.data);
        }).catch(err => {
            console.error(err);
        });
    }

    updatePostById = async() => {
        const updatePost = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        };
        const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', updatePost);

        console.info(response.data);
    }

    deletePosts = async() => {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');

        console.info(response.data);
    }

    render() {
        return (
            <div>
                Car components is works
                <Button variant='primary' 
                    onClick={this.createNewPosts}>Add new posts
                </Button>
                <table>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                    {this.state.users.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.name}</td>
                                <td>{value.username}</td>
                                <td>
                                    <Button variant='info'
                                    onClick={this.updatePostById}>
                                        Edit Post
                                    </Button>
                                    <Button variant='danger'
                                    onClick={this.deletePosts}>
                                        Delete coy
                                    </Button>
                                </td>

                            </tr>
                        )
                    })}
                </table>

            </div>
        );
    }
}