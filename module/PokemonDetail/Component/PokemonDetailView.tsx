import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {PokemonDetailResult} from '../PokemonDetailEntity';
import {FilledHeartIcon, HeartIcon} from '../../../image';

type Props = {
  pokemon?: PokemonDetailResult;
  onLiked: () => void;
  isLiked: boolean;
};

export default function PokemonDetailView({pokemon, onLiked, isLiked}: Props) {
  return (
    <View style={styles.viewContainer}>
      <View>
        <Text>
          Pokemon Name :{' '}
          {`${pokemon?.name.charAt(0).toUpperCase()}${pokemon?.name.slice(1)}`}
        </Text>
        <Text>Base Experience : {pokemon?.base_experience}</Text>
        <Text>Weight : {pokemon?.weight}</Text>
        <Text>Height : {pokemon?.height}</Text>
        <Text>Pokemon Ability List</Text>
        <FlatList
          data={pokemon?.abilities}
          renderItem={item => <Text>{item.item.ability.name}</Text>}
        />
      </View>
      <TouchableOpacity onPress={onLiked}>
        <Image
          source={isLiked ? FilledHeartIcon : HeartIcon}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
  },
  icon: {
    width: 50,
    height: 50,
  },
});
