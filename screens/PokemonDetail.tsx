import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import PokemonDetailContainer from '../module/PokemonDetail/PokemonDetailContainer';
import {RouteProp} from '@react-navigation/core';

export type PokemonDetailNavigation = NativeStackNavigationProp<
  RootStackParamList,
  'PokemonDetail'
>;

type PokemonDetailNavigationProp = RouteProp<
  RootStackParamList,
  'PokemonDetail'
>;

type Props = {
  navigation: PokemonDetailNavigation;
  route: PokemonDetailNavigationProp;
};

export default function PokemonDetail({route}: Props) {
  return <PokemonDetailContainer urlPath={route.params.urlPath} />;
}
