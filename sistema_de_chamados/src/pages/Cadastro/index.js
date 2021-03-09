import React, { useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import schema from './schema'
import './index.css'
import {
    BrowserRouter as Router } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useHistory } from 'react-router-dom';
import api from '../../services/api'

export default function Cadastro() {

    const history = useHistory();

    const handleSubmit = useCallback((data) =>{
        const cadastro = async(req, res) => {
            const {nome, email, cpf, rg, cep, endereco, telefone, cargo, password} = req.body;
            const form = {nome, email, cpf, rg, cep, endereco, telefone, cargo, password}

            await api.post('cadastro', form)
            res.status(200)
            console.log('teste')
        }
    }, [])

    function onSubmit(values, actions) {
        history.push('/chamados');
    }

    return (
        <Router>
            <Formik className="formik"
                validationSchema={schema}
                onSubmit={onSubmit}
                validateOnMount
                initialValues={{
                    nome: '',
                    email: '',
                    cpf: '',
                    rg: '',
                    cep: '',
                    endereco: '',
                    telefone: '',
                    cargo: '',
                    password: '',
                }}
                render={({ isValid }) => (
             <div className="container">
                <Form className="form">
                    <h1 className="title-cadastro">Cadastro</h1>
                    <div className="parte">
                      <div className="parte1">
                        <div className="inputdiv">
                            <label>Nome:</label>
                            <Field className="input" type="text" name="nome"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="nome" component="spam" />
                            </div>
                        </div> 
                        <div className="inputdiv">
                            <label>E-mail:</label>
                            <Field className="input" type="email" name="email"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="email" component="spam" />
                            </div>
                        </div > 
                        <div className="inputdiv"> 
                            <label>CPF:</label>  
                            <Field className="input" type="text" name="cpf"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="cpf" component="spam" />
                            </div>
                        </div>
                        <div className="inputdiv">
                            <label>RG:</label>
                            <Field className="input" type="text" name="rg"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="rg" component="spam" />
                            </div>
                        </div>
                        <div className="inputdiv">
                            <label>CEP:</label>
                            <Field className="input" type="text" name="cep"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="cep" component="spam" />
                            </div>
                        </div>
                    </div>
                   <div className="parte2">
                        <div className="inputdiv">
                            <label>Endereço:</label>
                            <Field className="input" type="text" name="endereco"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="endereco" component="spam" />
                            </div>
                        </div>
                        <div className="inputdiv">
                            <label>Telefone:</label>
                            <Field className="input" type="text" name="telefone" />
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="telefone" component="spam" />
                            </div>
                        </div>
                        <div className="inputdiv">
                            <label>Cargo:</label>
                            <Field className="input" type="text" name="cargo"/>
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="cargo" component="spam" />
                            </div>
                        </div>
                        <div className="inputdiv">
                            <label>Senha:</label>
                            <Field className="input" type="password" name="password" />
                            <div className="Form-erro">
                                <ErrorMessage className="erro" name="password" component="spam" />
                            </div>
                        </div>
                        <button className="Submit" type="submit" disabled={!isValid} onClick={handleSubmit}>Cadastrar</button>
                 </div>
                </div>

                    {/*<img src={logo} className="imagem" />*/}
                </Form>
            </div>
            
                )}
            />
        </Router>
    )
}

