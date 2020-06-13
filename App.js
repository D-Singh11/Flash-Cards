import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigation from './components/navigation/TabsNavigation';

const store = createStore(reducers, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <NavigationContainer>
            <TabsNavigation />
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
