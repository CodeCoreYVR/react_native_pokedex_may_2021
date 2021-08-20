import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.body}>
        <Text>Hello world</Text>
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


