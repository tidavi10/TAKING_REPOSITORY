import React from 'react';
import {
    Container,
    Title,
    Form,
    Input,
    Button,
    Image,
    InputDiv
} from '../../styles/common-styles';
import logo from '../../assets/logo.png'
import { useHistory } from 'react-router-dom';


export default function Login() {
    const history = useHistory();

    const gotoCadastro = () => {
        history.push('/cadastro')
    }

    const gotoChamados = () => {
        history.push('/chamados')
    }

    return (
    <>
        <Container>
            <Form>
                    <Title>Login</Title>
                    <InputDiv>
                        <label>Nome:</label>
                        <Input type="name" name="name"/> 
                    </InputDiv>
                    <InputDiv>
                        <label>Senha:</label>   
                        <Input type="password" name="password" id="password"/>
                    </InputDiv>
                    <Button type="submit" onClick={gotoChamados}>Login</Button>
                    <Button type="submit">Login Social</Button>
                    <Button type="submit" onClick={gotoCadastro}>Cadastro</Button>
                    <Image src={logo} />
            </Form>  
        </Container>
    </>
)
}