import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('Teste o componente NotFound.', () => {
  test('A página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const titulo = screen.getByRole('heading', {
      name: 'Page requested not found',
      level: 2,
    });
    const image = screen.getByRole('img');

    expect(titulo).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
    );
  });
});