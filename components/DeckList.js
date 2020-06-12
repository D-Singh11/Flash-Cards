import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckCard from './DeckCard';

export default class DeckList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:33, color:'orange'}}>DeckList</Text>

                <DeckCard title={'Deck 1'} />
                <DeckCard title={'Deck 1'} />
                <DeckCard title={'Deck 1'} />
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