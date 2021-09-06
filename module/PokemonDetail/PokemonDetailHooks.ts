import {useQuery, UseQueryOptions} from 'react-query';
import {PokemonDetailResult} from './PokemonDetailEntity';
import {getDetailPokemon, PokemonDetailRequest} from './PokemonDetailService';

export const useGetPokemonDetail = (
  payload: PokemonDetailRequest,
  options?: UseQueryOptions<PokemonDetailResult, unknown>,
) => {
  return useQuery(
    ['pokemonDetail', payload],
    () => getDetailPokemon(payload),
    options,
  );
};
