import React, { useCallback } from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import {
    Container,
    Header,
    HeaderContent,
    Button,
    EditionArea,
    InputArea,
    EditionDescription,
    FilterSelector,
    Footer,
    ButtonFinish,
    Dropzone,
    EditionText,
    ButtonExit,
    CloudUpStyle,
} from '../TelaChamados/style';

import { BiCloudUpload } from "react-icons/bi";


function MyDropzone() {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Solte os arquivos aqui...</p> :
                    <p>Adicionar arquivos</p>
            }
        </div>
    )
}

export default function TelaChamados() {
    const history = useHistory();

    const gotoConsultaChamados = () => {
        history.push('/consulta-chamados')
    }

    function logout() {
        localStorage.clear();
        window.location.href= '/'
    }

    function alertFinish() {
        alert("Chamado cadastrado com sucesso!");
      }

    return (
        <Router>
            <Container>
                <Header>
                    <HeaderContent>
                        <Button type="submit" onClick={gotoConsultaChamados}>
                            <span>Consultar chamado</span>
                        </Button>
                        <ButtonExit type="submit" onClick={logout}>
                            <span>Sair</span>
                        </ButtonExit>
                    </HeaderContent>
                    <span>username</span>
                </Header>
                <EditionArea>
                    <InputArea>
                            <label for="tipoProblema">Selecione o problema: </label>
                        <FilterSelector>
                            <select name="tipoProblema" id="tipoProblema">
                                <option value="criacaoEmail">Criar e-mail</option>
                                <option value="acessoBitrix">Liberar acesso ao Bitrix</option>
                                <option value="reset">Resetar senha</option>
                                <option value="problemaMaquina">Problema na máquina</option>
                                <option value="outros">Outros</option>
                            </select>
                        </FilterSelector>
                        <Dropzone>
                            <CloudUpStyle>
                                <BiCloudUpload />
                            </CloudUpStyle>
                            <MyDropzone />
                        </Dropzone>
                    </InputArea>
                    <EditionText>
                        <EditionDescription>
                            <textarea
                                alt="Descreva o problema"
                                placeholder="Descreva o problema"
                                maxLength={2000} >
                            </textarea>
                        </EditionDescription>
                    </EditionText>
                </EditionArea>
                <Footer>
                    <ButtonFinish type="submit" onClick={alertFinish}>
                        <span>Abir chamado</span>
                    </ButtonFinish>
                </Footer>
            </Container>
        </Router>
    )
}
