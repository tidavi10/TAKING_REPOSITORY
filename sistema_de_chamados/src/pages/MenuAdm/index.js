import React from 'react';
import {
   Container,
   Header,
   HeaderContent,
   ButtonHeader,
   Img, 
} from './styles';
import logo from '../../assets/logo.png'
import { useHistory } from 'react-router-dom';

export default function MenuAdm() {
    const history = useHistory();

    const gotoadm = () => {
        history.push('/chamados-adm')
    }
    return (
        <>
            <Container>
                <Header>
                    <HeaderContent>
                        <ButtonHeader onClick={gotoadm}>
                            <span>Tela de Chamados</span>
                        </ButtonHeader>
                    </HeaderContent>
                    <span>Usuário Logado</span>
                </Header>
                <Img src={logo}></Img>
            </Container>
        </>
    )
}


