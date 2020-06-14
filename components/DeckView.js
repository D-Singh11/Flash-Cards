import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DeckView extends Component {
    render() {
        return (
            <View>
                <Text>Deck View</Text>
                <Text>{this.props.route.params.deckId}</Text>
            </View>
        )
    }
}
