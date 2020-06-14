import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabsNavigation from './TabsNavigation';
import DeckView from '../DeckView';
import AddQuestion from '../AddQuestion';
import QuizView from '../QuizView';


const Stack = createStackNavigator();

export default class MainNavigator extends Component {
    render() {
        return (
            <Stack.Navigator headerMode={'screen'}>
                <Stack.Screen name='Dashboard' component={TabsNavigation} />
                <Stack.Screen name='Deck Detail' component={DeckView} />
                <Stack.Screen name="Add Question" component={AddQuestion} />
                <Stack.Screen name="Quiz" component={QuizView} />
            </Stack.Navigator>
        )
    }
}
