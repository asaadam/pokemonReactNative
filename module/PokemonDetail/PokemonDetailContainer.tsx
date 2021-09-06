import {Text, View} from 'react-native';
import React from 'react';
import {useGetPokemonDetail} from './PokemonDetailHooks';
import PokemonDetailView from './Component/PokemonDetailView';
import {useFavoritePokemons} from '../FavoritePokemons/FavoritePokemonsHooks';

export type PokemonDetailProps = {
  urlPath: string;
};

export default function PokemonDetailContainer({urlPath}: PokemonDetailProps) {
  const {data} = useGetPokemonDetail({path: urlPath}, {enabled: !!urlPath});
  const pokemon = useFavoritePokemons();

  return (
    <View>
      {data ? (
        <PokemonDetailView
          isLiked={pokemon.liked?.includes(data.name) || false}
          pokemon={data}
          onLiked={() => {
            if (data?.name && pokemon.onLiked) {
              pokemon.onLiked(data?.name);
            }
          }}
        />
      ) : (
        <Text>'Loading..'</Text>
      )}
    </View>
  );
}
