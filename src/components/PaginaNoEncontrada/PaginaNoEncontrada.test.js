import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaginaNoEncontrada from './PaginaNoEncontrada';

describe('<PaginaNoEncontrada />', () => {
  test('it should mount', () => {
    render(<PaginaNoEncontrada />);
    
    const paginaNoEncontrada = screen.getByTestId('PaginaNoEncontrada');

    expect(paginaNoEncontrada).toBeInTheDocument();
  });
});