import React from 'react';
import {
    BrowserRouter as Router } from 'react-router-dom';
import {
    Container,
    Form,
    Title,
    Input,
    Button,
    Image
} from '../../styles/common-styles';
import logo from '../../assets/logo.png'

export default function Cadastro() {
    return (
        <Router>
            <Container>
                <Form>
                    <Title>Cadastro</Title>
                    <Input type="text" name="nome" placeholder="Nome" />
                    <Input type="text" name="cpf" placeholder="CPF" />
                    <Input type="text" name="rg" placeholder="RG" />
                    <Input type="text" name="cep" placeholder="CEP" />
                    <Input type="text" name="endereco" placeholder="Endereço" />
                    <Input type="text" name="cargo" placeholder="Cargo" />
                    <Input type="password" nome="senha" placeholder="Senha" />
                    <Button type="submit">Cadastrar</Button>
                    <Image src={logo} />
                </Form>
            </Container>
        </Router>
    )
}

