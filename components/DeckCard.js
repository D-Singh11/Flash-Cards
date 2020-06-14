import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DeckCard extends Component {
    render() {
        return (
            <View style={styles.deck}>
                <Text>{this.props.title}</Text>
                <Text>Cards : {this.props.cardCount}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deck: {
        width: 200,
        height: 100,
        borderColor: '#323',
        borderBottomWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
