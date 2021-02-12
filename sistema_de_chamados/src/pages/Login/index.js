import React from 'react';
import {
    Container,
    Title,
    Form,
    Input,
    Button,
    Image
} from './styles';
import logo from '../../assets/logo.png'


export default function Login() {
    return (
    <>
        <Container>
            <Form>
                    <Title>Login</Title>
                    <Input type="email" name="email" placeholder="Digite seu e-mail (exemplo@outlook.com)"/> 
                    <Input type="password" name="password" id="password" placeholder="Digite sua senha"/>
                    <Button type="submit">Login</Button>
                    <Button type="submit">Login Social</Button>
                    <Button type="submit">Cadastro</Button>
                    <Image src={logo} />
            </Form>  
        </Container>
    </>
)
}