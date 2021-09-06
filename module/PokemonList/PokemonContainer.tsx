import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {useGetPokemonList} from '../PokemonList/PokemonListHooks';
import {Item} from './Component/PokemonList';
import {Page} from './PokemonListEntity';

export default function PokemonContaier() {
  const {data, fetchNextPage, isLoading, refetch} = useGetPokemonList();
  const result = data as unknown as Page;
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.viewContainer}>
        <FlatList
          progressViewOffset={100}
          data={result?.pokemons}
          refreshing={isLoading}
          renderItem={pokemon => <Item pokemon={pokemon.item} />}
          keyExtractor={item => item.url}
          onRefresh={refetch}
          onEndReached={() => fetchNextPage()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    padding: 16,
  },
});
