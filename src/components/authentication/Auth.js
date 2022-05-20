import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';


const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.info("USING EFFECT HOOK");
        console.log("LOG VALUE : " + email);
        console.info("LOG PASSWORD : " + password);
    });

    const doAuthentication = (event) => {
        event.preventDefault();
        const authObject = {
            email: email,
            password: password
        };
        axios.post('http://localhost:8989/auth/signin',
        authObject).then(response => {
            console.info("LOG RESPONSE : ", response.data);
        }).catch(err => {
            console.error(err);
        });
    }

    return(
        <div>
            <form onSubmit={event => doAuthentication(event)}>
                <div>
                    <label>Email</label><br />
                    <input type='text' 
                    onChange={event => setEmail(event.target.value)} />
                </div>
                <div>
                    <label>Password</label><br />
                    <input type='password'
                    onChange={event => setPassword(event.target.value)} />
                </div><br />
                <div>
                    <Button variant='primary' type='submit'>Submit</Button>
                </div>
            </form>
        </div>
    );
}

export default Auth;
