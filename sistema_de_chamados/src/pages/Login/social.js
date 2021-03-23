import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

import { useHistory } from 'react-router-dom';
import {loginSocial} from '../../services/api'

export class Social extends Component {

    responseGoogle = (response) => {
        try{
            const token = response.tokenId
            const email = response.profileObj.email
            const name = response.profileObj.name
            //const {email, name} = response.profileObj
            //const form = {email, name}
            localStorage.setItem("Token:id", token)
            sessionStorage.setItem("Form:email", email)
            sessionStorage.setItem("Form:name", name)
            loginSocial.post('loginsocial/cadastrogmail', email)
        }catch(erro){
            alert('deu erro')
        }
    }
    render() {
        return (
            <div>
                <GoogleLogin
                    clientId="499021820618-sq7nl7tub85p58odenrb44dl29tut6qo.apps.googleusercontent.com"
                    buttonText="Sign in"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}

export default Social