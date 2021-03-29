$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 4,
  "name": "Login",
  "description": "Para validar a autenticação no sistema de chamados da Taking\nComo usuário do sistema\nEu quero logar e validar as permissões de tenico e cliente",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@wip"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "realizar login no sistema com usuários válidos",
  "description": "",
  "id": "login;realizar-login-no-sistema-com-usuários-válidos",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 14,
  "name": "informar um \u003cUsuario\u003e válido",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "inserir uma \u003cSenha\u003e válida",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o sistema deve permitir a autenticação do usuário",
  "keyword": "Então "
});
formatter.step({
  "line": 17,
  "name": "o tipo de \u003cPermissao\u003e do usuário deve ser exibido",
  "keyword": "E "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login;realizar-login-no-sistema-com-usuários-válidos;",
  "rows": [
    {
      "cells": [
        "Usuario",
        "Senha",
        "Permissao"
      ],
      "line": 20,
      "id": "login;realizar-login-no-sistema-com-usuários-válidos;;1"
    },
    {
      "cells": [
        "\"jorge.silva@taking.com.br\"",
        "\"02030104\"",
        "\"?\""
      ],
      "line": 21,
      "id": "login;realizar-login-no-sistema-com-usuários-válidos;;2"
    },
    {
      "cells": [
        "\"sonia.nimberg@taking.com.br\"",
        "\"05006489\"",
        "\"Tecnico\""
      ],
      "line": 22,
      "id": "login;realizar-login-no-sistema-com-usuários-válidos;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 9,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que usuário possa acessar a tela de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_usuário_possa_acessar_a_tela_de_login_do_sistema()"
});
formatter.result({
  "duration": 2907661971,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "realizar login no sistema com usuários válidos",
  "description": "",
  "id": "login;realizar-login-no-sistema-com-usuários-válidos;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "informar um \"jorge.silva@taking.com.br\" válido",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "inserir uma \"02030104\" válida",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o sistema deve permitir a autenticação do usuário",
  "keyword": "Então "
});
formatter.step({
  "line": 17,
  "name": "o tipo de \"?\" do usuário deve ser exibido",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "jorge.silva@taking.com.br",
      "offset": 13
    }
  ],
  "location": "LoginSteps.informar_um_válido(String)"
});
formatter.result({
  "duration": 2377569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02030104",
      "offset": 13
    }
  ],
  "location": "LoginSteps.inserir_uma_válida(String)"
});
formatter.result({
  "duration": 87489,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_deve_permitir_a_autenticação_do_usuário()"
});
formatter.result({
  "duration": 870442349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "?",
      "offset": 11
    }
  ],
  "location": "LoginSteps.o_tipo_de_do_usuário_deve_ser_exibido(String)"
});
formatter.result({
  "duration": 1186879,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.esther.talkingtestealelo.cucumber.steps.LoginSteps.o_tipo_de_do_usuário_deve_ser_exibido(LoginSteps.java:39)\n\tat ✽.E o tipo de \"?\" do usuário deve ser exibido(Login.feature:17)\n",
  "status": "pending"
});
formatter.background({
  "line": 9,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que usuário possa acessar a tela de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_usuário_possa_acessar_a_tela_de_login_do_sistema()"
});
formatter.result({
  "duration": 759266723,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "realizar login no sistema com usuários válidos",
  "description": "",
  "id": "login;realizar-login-no-sistema-com-usuários-válidos;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "informar um \"sonia.nimberg@taking.com.br\" válido",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "inserir uma \"05006489\" válida",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o sistema deve permitir a autenticação do usuário",
  "keyword": "Então "
});
formatter.step({
  "line": 17,
  "name": "o tipo de \"Tecnico\" do usuário deve ser exibido",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "sonia.nimberg@taking.com.br",
      "offset": 13
    }
  ],
  "location": "LoginSteps.informar_um_válido(String)"
});
formatter.result({
  "duration": 97083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05006489",
      "offset": 13
    }
  ],
  "location": "LoginSteps.inserir_uma_válida(String)"
});
formatter.result({
  "duration": 303960,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_deve_permitir_a_autenticação_do_usuário()"
});
formatter.result({
  "duration": 865455520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tecnico",
      "offset": 11
    }
  ],
  "location": "LoginSteps.o_tipo_de_do_usuário_deve_ser_exibido(String)"
});
formatter.result({
  "duration": 469301,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.esther.talkingtestealelo.cucumber.steps.LoginSteps.o_tipo_de_do_usuário_deve_ser_exibido(LoginSteps.java:39)\n\tat ✽.E o tipo de \"Tecnico\" do usuário deve ser exibido(Login.feature:17)\n",
  "status": "pending"
});
formatter.background({
  "line": 9,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que usuário possa acessar a tela de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_usuário_possa_acessar_a_tela_de_login_do_sistema()"
});
formatter.result({
  "duration": 656624879,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Tentar realizar login com usuário inválido",
  "description": "",
  "id": "login;tentar-realizar-login-com-usuário-inválido",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 25,
  "name": "informar um \"jorge.silva\" inválido",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "inserir uma \"02030104\" válida",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "o sistema deve informar que o usuário ou senha está incorreto",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "jorge.silva",
      "offset": 13
    }
  ],
  "location": "LoginSteps.informar_um_inválido(String)"
});
formatter.result({
  "duration": 258897,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.esther.talkingtestealelo.cucumber.steps.LoginSteps.informar_um_inválido(LoginSteps.java:45)\n\tat ✽.Quando informar um \"jorge.silva\" inválido(Login.feature:25)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "02030104",
      "offset": 13
    }
  ],
  "location": "LoginSteps.inserir_uma_válida(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.o_sistema_deve_informar_que_o_usuário_ou_senha_está_incorreto()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 9,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que usuário possa acessar a tela de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_usuário_possa_acessar_a_tela_de_login_do_sistema()"
});
formatter.result({
  "duration": 664427647,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Tentar realizar login com senha inválido",
  "description": "",
  "id": "login;tentar-realizar-login-com-senha-inválido",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 30,
  "name": "informar um \"jorge.silva@taking.com.br\" válido",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "inserir uma \"020301\" inválido",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "o sistema deve informar que o usuário ou senha está incorreto",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "jorge.silva@taking.com.br",
      "offset": 13
    }
  ],
  "location": "LoginSteps.informar_um_válido(String)"
});
formatter.result({
  "duration": 109662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "020301",
      "offset": 13
    }
  ],
  "location": "LoginSteps.inserir_uma_inválido(String)"
});
formatter.result({
  "duration": 327440,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.esther.talkingtestealelo.cucumber.steps.LoginSteps.inserir_uma_inválido(LoginSteps.java:57)\n\tat ✽.E inserir uma \"020301\" inválido(Login.feature:31)\n",
  "status": "pending"
});
formatter.match({
  "location": "LoginSteps.o_sistema_deve_informar_que_o_usuário_ou_senha_está_incorreto()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 9,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que usuário possa acessar a tela de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_usuário_possa_acessar_a_tela_de_login_do_sistema()"
});
formatter.result({
  "duration": 676198025,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Tentar realizar login com usuário vazio",
  "description": "",
  "id": "login;tentar-realizar-login-com-usuário-vazio",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 35,
  "name": "informar um \"  \" vazio",
  "keyword": "Quando "
});
formatter.step({
  "line": 36,
  "name": "inserir uma \"02030104\" válida",
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "o sistema deve informar que o usuário ou senha está incorreto",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "  ",
      "offset": 13
    }
  ],
  "location": "LoginSteps.informar_um_vazio(String)"
});
formatter.result({
  "duration": 424321,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.esther.talkingtestealelo.cucumber.steps.LoginSteps.informar_um_vazio(LoginSteps.java:63)\n\tat ✽.Quando informar um \"  \" vazio(Login.feature:35)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "02030104",
      "offset": 13
    }
  ],
  "location": "LoginSteps.inserir_uma_válida(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.o_sistema_deve_informar_que_o_usuário_ou_senha_está_incorreto()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 9,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que usuário possa acessar a tela de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_usuário_possa_acessar_a_tela_de_login_do_sistema()"
});
formatter.result({
  "duration": 634113689,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Tentar realizar login com senha vazio",
  "description": "",
  "id": "login;tentar-realizar-login-com-senha-vazio",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 40,
  "name": "informar um \"jorge.silva@taking.com.br\" válido",
  "keyword": "Quando "
});
formatter.step({
  "line": 41,
  "name": "inserir uma \"  \" vazio",
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "o sistema deve informar que o usuário ou senha está incorreto",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "jorge.silva@taking.com.br",
      "offset": 13
    }
  ],
  "location": "LoginSteps.informar_um_válido(String)"
});
formatter.result({
  "duration": 157542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "  ",
      "offset": 13
    }
  ],
  "location": "LoginSteps.inserir_uma_vazio(String)"
});
formatter.result({
  "duration": 338872,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.esther.talkingtestealelo.cucumber.steps.LoginSteps.inserir_uma_vazio(LoginSteps.java:69)\n\tat ✽.E inserir uma \"  \" vazio(Login.feature:41)\n",
  "status": "pending"
});
formatter.match({
  "location": "LoginSteps.o_sistema_deve_informar_que_o_usuário_ou_senha_está_incorreto()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 9,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que usuário possa acessar a tela de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_usuário_possa_acessar_a_tela_de_login_do_sistema()"
});
formatter.result({
  "duration": 717096193,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Tentar realizar login com usuário e senha vazio",
  "description": "",
  "id": "login;tentar-realizar-login-com-usuário-e-senha-vazio",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 45,
  "name": "informar um \"  \" vazio",
  "keyword": "Quando "
});
formatter.step({
  "line": 46,
  "name": "inserir uma \"  \" vazio",
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "o sistema deve informar que o usuário ou senha está incorreto",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "  ",
      "offset": 13
    }
  ],
  "location": "LoginSteps.informar_um_vazio(String)"
});
formatter.result({
  "duration": 370741,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.esther.talkingtestealelo.cucumber.steps.LoginSteps.informar_um_vazio(LoginSteps.java:63)\n\tat ✽.Quando informar um \"  \" vazio(Login.feature:45)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "  ",
      "offset": 13
    }
  ],
  "location": "LoginSteps.inserir_uma_vazio(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.o_sistema_deve_informar_que_o_usuário_ou_senha_está_incorreto()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 9,
  "name": "possibilidade de acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que usuário possa acessar a tela de login do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_usuário_possa_acessar_a_tela_de_login_do_sistema()"
});
formatter.result({
  "duration": 747716834,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Tentar realizar login com usuário e senha inválido",
  "description": "",
  "id": "login;tentar-realizar-login-com-usuário-e-senha-inválido",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 50,
  "name": "informar um \"jorge.silva\" inválido",
  "keyword": "Quando "
});
formatter.step({
  "line": 51,
  "name": "inserir uma \"020301\" inválido",
  "keyword": "E "
});
formatter.step({
  "line": 52,
  "name": "o sistema deve informar que o usuário ou senha está incorreto",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "jorge.silva",
      "offset": 13
    }
  ],
  "location": "LoginSteps.informar_um_inválido(String)"
});
formatter.result({
  "duration": 360789,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.esther.talkingtestealelo.cucumber.steps.LoginSteps.informar_um_inválido(LoginSteps.java:45)\n\tat ✽.Quando informar um \"jorge.silva\" inválido(Login.feature:50)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "020301",
      "offset": 13
    }
  ],
  "location": "LoginSteps.inserir_uma_inválido(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.o_sistema_deve_informar_que_o_usuário_ou_senha_está_incorreto()"
});
formatter.result({
  "status": "skipped"
});
});