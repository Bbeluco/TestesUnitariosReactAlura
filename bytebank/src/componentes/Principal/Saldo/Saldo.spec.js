import { render, screen } from '@testing-library/react';
import Saldo from './index';

describe('Componente <Saldo />', () => {
  test('Deve retornar o valor com o formato monetário', () => {
    render(<Saldo saldo={1000} />);
    const saldoNaCarteira = screen.getByTestId('saldo');
    expect(saldoNaCarteira).toHaveTextContent('R$ 1000');
  });
});
