import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Deve renderizar o campo de input', () => {
  test('no documento', () => {
    render(<Formulario />);
    const campoInput = screen.getByPlaceholderText('Digite um valor');
    expect(campoInput).toBeInTheDocument();
  });

  test(' com o type igual a number', () => {
    render(<Formulario />);
    const campoInput = screen.getByPlaceholderText('Digite um valor');
    expect(campoInput).toHaveAttribute('type', 'number');
  });

  test(' que possa ser preenchido', () => {
    render(<Formulario />);
    const campoInput = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoInput, '50');
    expect(campoInput).toHaveValue(50);
  });
});

describe('Deve renderizar o botao de submit', () => {
  test('Vezes em que o botao foi acionado', () => {
    const realizarTransacao = jest.fn();

    render(<Formulario realizarTransacao={realizarTransacao} />);
    const botao = screen.getByRole('button');
    userEvent.click(botao);

    expect(realizarTransacao).toBeCalledTimes(1);
  });
});
