import React from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import {
    Header,
    Title,
    Input,
    Button,
    EditionArea,
    InputArea,
    EditionDescription,
    FilterSelector,
} from '../TelaChamados/style';

export default function TelaChamados() {
    return (
        <Router>
            <Header>
                <Button>
                   <span>Consultar chamado</span>
                </Button>
            </Header>
            <Title>
                <span>Descreva o problema</span>
            </Title>
            <EditionArea>
                <InputArea>
                    <EditionDescription>
                        descricao
                    </EditionDescription>
                </InputArea>

            <FilterSelector>
                <select>
                    <option value="xxxx">xxxxx</option>
                    <option value="xxxx">xxxxx</option>
                    <option value="xxxx">xxxxx</option>
                </select>
            </FilterSelector>
            
            </EditionArea>
            <Input type="file" />
            
            <Button>
                <span>Finalizar chamado</span>
            </Button>
        </Router>
    )
}
