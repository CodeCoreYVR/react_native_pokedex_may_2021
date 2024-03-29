import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonDetails from './components/PokemonDetails';


const POKEMON_API_ENDPOINT = 'https://pokeapi.co/api/v2/';
const FIRST_100_POKEMON_QUERY = 'pokemon?limit=100';

//create stack object
const Stack = createStackNavigator();

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(()=> {
    fetch(`${POKEMON_API_ENDPOINT}${FIRST_100_POKEMON_QUERY}`)
    .then(res => res.json())
    .then(payload => {
      console.log(payload);
      setPokemonList(payload.results)
    })
  }, [])
  return (
    <NavigationContainer style={styles.container}>
      <Header/>
      <View style={styles.body}>
        <Stack.Navigator
        screenOptions={
          {
            headerShown: false
          }
        }
        >
          <Stack.Screen
          name="Pokemon List"
          children={({ navigation })=>{
            return <PokemonList list={pokemonList} navigation={navigation}/>
          }}
          />
          <Stack.Screen 
          name="Pokemon Details"
          component={PokemonDetails}
          />
        </Stack.Navigator>
      </View>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  body: {
    flex: 5
  }
});


