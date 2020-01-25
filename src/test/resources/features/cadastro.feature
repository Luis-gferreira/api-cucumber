#language: pt

Funcionalidade: Cadastro de pessoas
  -Como um usuário quero me cadastrar
  -na plataforma.
   
  Cenário: Cadastro válido
    Dado insiro um nome "João"
    E insiro uma senha "Jb0123"
    E informo meu email "joaofulano@gmail.com" 
    Quando clicar em cadastrar
    Entao retorna "cadastro com sucesso!" 
    
    Cenário: senha inválida
    Dado que crio uma senha "1234" 
    Quando clicar em cadastrar senha
    Então senha inválida "deve conter seis caracteres com letras e números" 
    
