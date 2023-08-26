import { render, screen } from "@testing-library/react";
import Menu from './index';

test('Deve renderizar um link para a pagina inicial', () => {
    render(<Menu />);
    const linkParaPaginaInicial = screen.getByText('Inicial');
    expect(linkParaPaginaInicial).toBeInTheDocument();
})

test('Deve renderizar varios links', () => {
    render(<Menu />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(4);
})

test('Não deve renderizar o link para extrato', () => {
    render(<Menu />);
    const linkParaExtrato = screen.queryByText('Extrato');
    expect(linkParaExtrato).not.toBeInTheDocument();
})