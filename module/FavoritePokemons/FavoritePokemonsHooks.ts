import React from 'react';
import {PokemonContext} from '../../Context/FavoriteContext';

export const useFavoritePokemons = () => {
  const context = React.useContext(PokemonContext);
  if (!context) {
    throw new Error(
      'useFavoritePokemons must be inside of PokemonContext Provider',
    );
  }
  return context;
};
