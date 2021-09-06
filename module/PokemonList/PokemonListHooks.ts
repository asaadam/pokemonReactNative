import {useInfiniteQuery} from 'react-query';
import {PokemonListType} from './PokemonListEntity';
import {getPaginatedPokemon} from './PokemonService';

export const useGetPokemonList = () => {
  return useInfiniteQuery('pokemons', getPaginatedPokemon, {
    select: data => {
      const allPagesArray: Array<PokemonListType>[] = [];
      data?.pages
        ? data.pages.forEach(contactsArray =>
            allPagesArray.push(contactsArray.page),
          )
        : null;
      const flatPokemons = allPagesArray.flat();
      return {
        pages: data.pages,
        pageParams: data.pageParams,
        pokemons: flatPokemons,
      };
    },
    getNextPageParam: lastPage => lastPage.pageParam + 10,
    // onError: (error: Error) => console.log(error),
    staleTime: 1000 * 60 * 60,
  });
};
