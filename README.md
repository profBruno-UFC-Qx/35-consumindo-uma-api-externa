# Descrição

Neste exercício, vaamos implementar um fluxo fíctcio de login usando `promises`.

Objetivo desse exercício é praticar a manipulação de `promises`. 

**Todas as alterações devem ser feitas nos arquivos já existentes**

* src/main.js -> quando for necessário alterar JavaScript

## Instruções:

1. Crie uma função chamada `verificarUsuario` que retorna uma Promise que simula a verificação de um nome de usuário.
  - Para simplificar a implementação a função deve resolver a `promise` quando o nome de usuário informando for `sucesso@mail.com` retornando a mensagem *Usuário válido*, caso contrário a `promise` deve ser rejeitada com a mensagem *Usuário inválido*.
2. Crie outra função chamada `verificarSenha` que retorna uma Promise que simula a verificação da senha.
  - Considere que a senha correta é 123456, nesse caso a `promise` deve ser resolvida com a mensagem *Senha correta*, caso contrário, a `promise` deve ser rejeitada com a mensagem *Usuário ou senha inválidos*.
3. Crie outra função chamado `login` que deve receber o email do usário e a senha como argumentos.
4. Dentro desta função, encadeie as Promises usando `.then()` para simular um fluxo de autenticação, onde a primeira Promise representa a verificação do nome de usuário e a segunda Promise representa a verificação da senha.
5. Use `.then()` e `.catch()`para lidar com o resultado do fluxo de autenticação.
6. Caso o usuário informe usuário e senha corretamente, a função deve retornar a segunite mensagem *Login realizado com sucesso*, caso contrário ela deve lançar uma exceção com a mensagem *Usuário ou senha inválidos*.
