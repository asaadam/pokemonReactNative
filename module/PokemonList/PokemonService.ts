import instance from '../../shared/fetcher';
import {Page} from './PokemonListEntity';

export const getPaginatedPokemon = async ({pageParam = 0}): Promise<Page> => {
  let {
    data: {results: page},
  } = await instance.get('/pokemon', {
    params: {limit: 10, offset: pageParam},
  });
  return {page, pageParam};
};
