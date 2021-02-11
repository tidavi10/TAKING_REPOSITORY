import React from 'react';
import {
    Container,
    Title,
    Form,
    Input,
    Button
} from './styles';


export default function Login() {
    return (
        <Container>
            <img src="/img/1560831383965.png"/>
            
            <Form>
                    <Title>Login</Title>
                    <Input type="email" name="email" placeholder="Digite seu e-mail (exemplo@outlook.com)"/> 
                    <Input type="password" name="password" id="password" placeholder="Digite sua senha"/>
                    <Button type="submit">Login</Button>
            </Form>  
    </Container>

)
}