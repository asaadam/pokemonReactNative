import instance from '../../shared/fetcher';
import {PokemonDetailResult} from './PokemonDetailEntity';

export type PokemonDetailRequest = {
  path: string;
};

export const getDetailPokemon = async ({
  path,
}: PokemonDetailRequest): Promise<PokemonDetailResult> => {
  let {data} = await instance.get<PokemonDetailResult>(`/pokemon/${path}`);
  return data;
};
