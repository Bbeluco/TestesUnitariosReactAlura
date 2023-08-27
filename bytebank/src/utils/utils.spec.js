import { calculaNovoSaldo } from './index';

describe('Quando eu realizo uma transacao', () => {
  test('Que é do tipo deposito, o saldo deve aumentar', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 50,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);
    expect(novoSaldo).toBe(150);
  });

  test('Que é do tipo transferencia, o saldo deve diminuir', () => {
    const transacao = {
      transacao: 'Transferência',
      valor: 50,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);
    expect(novoSaldo).toBe(50);
  });
});

test('Deve retornar o valor do saldo corrigido pelo rendimento', () => {
  const rendimento = jest.fn((saldo) => saldo + saldo * 0.005);

  const saldo = 100;
  const resultado = rendimento(saldo);
  expect(resultado).toBe(100.5);
  expect(rendimento).toBeCalled();
  expect(rendimento).toHaveBeenCalledWith(saldo);
});
