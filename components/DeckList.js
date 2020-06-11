import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DeckList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:33, color:'orange'}}>DeckList</Text>

                <View style={styles.deck}>
                    <Text>Deck 1</Text>
                </View>
                <View style={styles.deck}>
                    <Text>Deck 2</Text>
                </View>
                <View style={styles.deck}>
                    <Text>Deck 3</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    deck: {
        width:200,
        height: 100,
        borderColor: '#323',
        borderBottomWidth: 2,
        justifyContent:'center',
        alignItems:'center'
    }
})