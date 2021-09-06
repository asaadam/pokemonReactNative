import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import SplashScreen from 'react-native-splash-screen';
import {Button} from 'react-native';

import {Home} from './screens/Home';
import PokemonDetail from './screens/PokemonDetail';
import Favorite from './screens/Favorite';

import {PokemonDetailProps} from './module/PokemonDetail/PokemonDetailContainer';
import {FavoritePokemonsProvider} from './Context/FavoriteContext';

export type RootStackParamList = {
  Home: undefined;
  PokemonDetail: PokemonDetailProps;
  FavoritePokemon: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <FavoritePokemonsProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              options={({route, navigation}) => ({
                title: 'List of Pokemons',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate('FavoritePokemon')}
                    title={'Favorite'}
                  />
                ),
              })}
            />
            <Stack.Screen
              options={{title: 'Pokemon Detail'}}
              name="PokemonDetail"
              component={PokemonDetail}
            />
            <Stack.Screen
              options={{title: 'Favorite Pokemons'}}
              name="FavoritePokemon"
              component={Favorite}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </FavoritePokemonsProvider>
  );
}
