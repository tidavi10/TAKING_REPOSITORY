import React from 'react'
import GoogleLogin from 'react-google-login'

import { useHistory } from 'react-router-dom';
import {LoginSocial} from '../../services/api'

function Social() {

    const history = useHistory();

    const responseGoogle = async (response) => {
        const token = response.tokenId
        console.log(response)
        const {name, email} = response.profileObj
        //teste
        const form = {email, nome: name}
        await LoginSocial(form)
        localStorage.setItem("@chamadosTaking:usuarioSocial", token)
        history.push('/chamados')
    }

        return (
            <div>
                <GoogleLogin
                    clientId="499021820618-sq7nl7tub85p58odenrb44dl29tut6qo.apps.googleusercontent.com" 
                    buttonText="Sign in"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }

export default Social