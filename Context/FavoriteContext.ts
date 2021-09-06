import React, {useState} from 'react';

type PokemonContext = {
  onLiked?: (pokemonName: string) => Promise<any>;
  liked?: Array<string>;
};
export const PokemonContext = React.createContext<PokemonContext>({});

export const FavoritePokemonsProvider: React.FC<{
  children: React.ReactNode;
}> = ({children}) => {
  const [state, setState] = useState<Array<string>>([]);
  const onLiked = async (pokemonName: string) => {
    if (pokemonName) {
      if (state.includes(pokemonName)) {
        setState(prev => prev.filter(pokemon => pokemon !== pokemonName));
      } else {
        setState(prev => [...prev, pokemonName]);
      }
    }
  };

  return React.createElement(PokemonContext.Provider, {
    value: {liked: state, onLiked},
    children,
  });
};
