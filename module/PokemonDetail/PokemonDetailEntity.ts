type Abbilities = {
  ability: {name: string};
};

export type PokemonDetailResult = {
  abilities: Array<Abbilities>;
  base_experience: number;
  name: string;
  height: number;
  weight: number;
};
