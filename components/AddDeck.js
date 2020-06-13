import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AddDeck extends Component {
    render() {
        return (
            <View style={styles.newDeck}>
                <Text>
                    Add new Deck
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    newDeck:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
