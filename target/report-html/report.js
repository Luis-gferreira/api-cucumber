$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/cadastro.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Cadastro de pessoas",
  "description": "-Como um usuário quero me cadastrar\n-na plataforma.",
  "id": "cadastro-de-pessoas",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 7,
  "name": "Cadastro válido",
  "description": "",
  "id": "cadastro-de-pessoas;cadastro-válido",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 8,
  "name": "insiro um nome \"João\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "insiro uma senha \"Jb0123\"",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "informo meu email \"joaofulano@gmail.com\"",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "clicar em cadastrar",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "retorna \"cadastro com sucesso!\"",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "João",
      "offset": 16
    }
  ],
  "location": "cadastroSteps.insiroUmNome(String)"
});
formatter.result({
  "duration": 328947700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jb0123",
      "offset": 18
    }
  ],
  "location": "cadastroSteps.insiroUmaSenha(String)"
});
formatter.result({
  "duration": 148100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "joaofulano@gmail.com",
      "offset": 19
    }
  ],
  "location": "cadastroSteps.informoMeuEmail(String)"
});
formatter.result({
  "duration": 199300,
  "status": "passed"
});
formatter.match({
  "location": "cadastroSteps.clicarEmCadastrar()"
});
formatter.result({
  "duration": 57800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cadastro com sucesso!",
      "offset": 9
    }
  ],
  "location": "cadastroSteps.retorna(String)"
});
formatter.result({
  "duration": 110500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "senha inválida",
  "description": "",
  "id": "cadastro-de-pessoas;senha-inválida",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 15,
  "name": "que crio uma senha \"1234\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "clicar em cadastrar senha",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "senha inválida \"deve conter seis caracteres com letras e números\"",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 20
    }
  ],
  "location": "cadastroSteps.queCrioUmaSenha(String)"
});
formatter.result({
  "duration": 192700,
  "status": "passed"
});
formatter.match({
  "location": "cadastroSteps.clicarEmCadastrarSenha()"
});
formatter.result({
  "duration": 60400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deve conter seis caracteres com letras e números",
      "offset": 16
    }
  ],
  "location": "cadastroSteps.senhaInválida(String)"
});
formatter.result({
  "duration": 147500,
  "status": "passed"
});
});