import axios from 'axios';

const api = axios.create({
    baseURL: "https://projetochamadosbackendtaking.herokuapp.com/",
    headers: {
        'Authorization':'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJpYUBnbWFpbC5jb20iLCJpYXQiOjE2MTU5MDMzNTUsImV4cCI6MTYxNTkyMTM1NX0.9g1uSPJBNwF0hNCCqAS15J6NJPqQPWrMGH1Vb-fa5UE'
    }
});

const cadastro = function (body) {
    return api.post('usuarios/cadastro', body)
}

const listarPossiveisProblemas = function () {
    return api.get('problema')
}

const cadastrarChamado = function (descricaoProblema, formData) {
    return api.post(`chamados/${10}/${2}/${6}?descricaoProblema=${descricaoProblema}`, formData,
    {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}

const getTotalDeChamados = function () {
    return api.get(`chamados/usuario/${10}`)
}

const listarChamados = function (numeroPagina) {
    return api.get(`chamados/usuario/${10}/${numeroPagina}`)
}

const listarChamadosAdm = function (numeroPagina) {
    return api.get(`chamados/adm/${10}/${numeroPagina}`)
}

export default api;

export {
    listarPossiveisProblemas,
    listarChamados, 
    cadastro, 
    listarChamadosAdm, 
    getTotalDeChamados,
    cadastrarChamado
};
