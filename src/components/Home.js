import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';

export default class Home extends Component {

    captureResponse = (response) => {
        console.info(response);
    };

    render() {
        return(
            <div>
                Home component is works
                <GoogleLogin 
                clientId='449632885333-phbbp1kth1aenlvbmdf8jnepp26efehf.apps.googleusercontent.com'
                buttonText='Login'
                onSuccess={this.captureResponse} 
                onFailure={this.captureResponse} 
                cookiePolicy={'single_host_origin'}
                responseType='code'
                redirectUri='http://localhost:3000' />
            </div>
        );
    }
}