import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import DeckList from './components/DeckList';
import { getDecks, saveDeckTitle } from './utils/api';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
