import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import DeckList from '../DeckList';
import AddDeck from '../AddDeck';

const Tab = createMaterialBottomTabNavigator();

function TabsNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Decks" component={DeckList} />
            <Tab.Screen name="Add Deck" component={AddDeck} />
        </Tab.Navigator>
    );
}

export default TabsNavigation;