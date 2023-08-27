import { render, screen } from '@testing-library/react';
import Extrato from './index';

test('Deve renderizar uma lista de transacoes', () => {
  const transacoes = [
    {
      transacao: 'Depósito',
      valor: 100,
    },
  ];

  render(<Extrato transacoes={transacoes} />);
  const listaExtratos = screen.getByRole('listitem');
  expect(listaExtratos).toBeInTheDocument();
});
