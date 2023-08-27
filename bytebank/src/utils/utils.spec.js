test('Deve retornar o valor do saldo corrigido pelo rendimento', () => {
  const rendimento = jest.fn((saldo) => saldo + saldo * 0.005);

  const saldo = 100;
  const resultado = rendimento(saldo);
  expect(resultado).toBe(100.5);
  expect(rendimento).toBeCalled();
  expect(rendimento).toHaveBeenCalledWith(saldo);
});
