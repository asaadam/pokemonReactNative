import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {PokemonListType} from '../PokemonListEntity';
import {getPathFromApi} from '../../../shared/getPathFromApi';
import {PokemonDetailNavigation} from '../../../screens/PokemonDetail';

type Props = {
  pokemon: PokemonListType;
};
export function Item({pokemon: {name, url}}: Props) {
  const navigation = useNavigation<PokemonDetailNavigation>();
  const urlPath = getPathFromApi(url);
  const onPress = () => navigation.navigate('PokemonDetail', {urlPath});
  return (
    <TouchableOpacity style={styles.viewContainer} onPress={onPress}>
      <View>
        <Text>{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    borderRadius: 16,
    borderColor: '#f0f0f0',
    backgroundColor: 'white',
    marginTop: 16,
    marginBottom: 16,
    height: 48,
    padding: 16,
    paddingLeft: 24,
  },
});
