import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DeckList from '../DeckList';
import DeckView from '../DeckView';


const Stack = createStackNavigator();

export default class MainNavigator extends Component {
    render() {
        return (
            <Stack.Navigator headerMode={'screen'}>
                <Stack.Screen name='Dashboard' component={DeckList} />
                <Stack.Screen name='Deck Detail' component={DeckView}/>
            </Stack.Navigator>
        )
    }
}
