import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe(

  'Teste, no compomente "FavoritePokemons" se...',
  () => {
    beforeEach(() => {
      renderWithRouter(<App />);
    });

    test(

      'é exibida na tela a mensagem "No favorite pokemon found",'
      + 'se a pessoa não tiver pokémons favoritos.',
      () => {
        userEvent.click(screen.getByText(/Favorite Pokémons/i));
        const semFavorito = screen.getByText('No favorite pokemon found');
        expect(semFavorito).toBeInTheDocument();
      },
    );

    test(

      'é exibido todos os cards de pokémons favoritados.',
      () => {
        userEvent.click(screen.getByText('More details'));
        const pokemonFavorito = screen.getByLabelText('Pokémon favoritado?');
        expect(pokemonFavorito).toBeInTheDocument();
        userEvent.click(pokemonFavorito);

        userEvent.click(screen.getByText(/Favorite Pokémons/i));
        const moreDetails = screen.getAllByText('More details');
        expect(moreDetails).toHaveLength(1);
      },
    );
  },
);
