import {View, FlatList} from 'react-native';
import React from 'react';
import {useFavoritePokemons} from './FavoritePokemonsHooks';
import {Item} from '../PokemonList/Component/PokemonList';
export default function FavoritePokemonsContainer() {
  const pokemon = useFavoritePokemons();

  return (
    <View>
      <FlatList
        progressViewOffset={100}
        data={pokemon.liked}
        renderItem={pokemonData => (
          <Item
            pokemon={{
              name: pokemonData.item,
              url: `/pokemon/${pokemonData.item}`,
            }}
          />
        )}
        keyExtractor={item => item}
      />
    </View>
  );
}
