export type PokemonListType = {
  name: string;
  url: string;
};
export type Page = {
  page: Array<PokemonListType>;
  pageParam: number;
  pokemons?: Array<PokemonListType>;
};

export type PokemonListResult = {
  results: Array<PokemonListType>;
};

export type PokemonListRequest = {
  limit: number;
  offset: number;
};
