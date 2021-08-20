import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import PokemonList from './components/PokemonList';


const POKEMON_API_ENDPOINT = 'https://pokeapi.co/api/v2/';
const FIRST_100_POKEMON_QUERY = 'pokemon?limit=100';

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
    <View style={styles.container}>
      <Header/>
      <View style={styles.body}>
        <PokemonList list={pokemonList}/>
      </View>
      <StatusBar style="auto" />
    </View>
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


