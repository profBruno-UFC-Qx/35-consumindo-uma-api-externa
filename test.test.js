const funcs = require('./src/main.js');

test('As funções existem', () => {
  expect(funcs.verificarUsuario).toBeDefined();
  expect(typeof funcs.verificarUsuario).toBe("function");

  expect(funcs.verificarSenha).toBeDefined();
  expect(typeof funcs.verificarSenha).toBe("function");

  expect(funcs.login).toBeDefined();
  expect(typeof funcs.login).toBe("function");
});

test('Usuário inválido', async () => {
  await expect(funcs.verificarUsuario('bruno@mail.com')).rejects.toMatch('Usuário inválido')
  await expect(funcs.verificarUsuario('teste@mail.com')).rejects.toMatch('Usuário inválido')
})

test('Usuário válido', async () => {
  await expect(funcs.verificarUsuario('sucesso@mail.com')).resolves.toBe("Usuário válido")
})

test('Verificando a senha incorreta de um usuário inválido', async () => {
  await expect(funcs.verificarSenha('bruno@mail.com', '123456')).rejects.toMatch('Usuário ou senha inválidos')
  await expect(funcs.verificarSenha('teste@mail.com', 'dsadasda')).rejects.toMatch('Usuário ou senha inválidos')
})

test('Verificando a senha incorreta de um usuário válido', async () => {
  await expect(funcs.verificarSenha('sucesso@mail.com', 'dsadasda')).rejects.toMatch('Usuário ou senha inválidos')
})

test('Verificando a senha correta de um usuário válido', async () => {
  await expect(funcs.verificarSenha('sucesso@mail.com', '123456')).resolves.toBe('Senha correta')
})


test('Usuário válido com senha incorreta', async () => {
  await expect(funcs.login('sucesso@mail.com', 'dsadasda')).rejects.toThrow('Usuário ou senha inválidos')
})

test('Usuário válido com senha correta', async () => {
  await expect(funcs.login('sucesso@mail.com', '123456')).resolves.toBe('Login realizado com sucesso')
})

