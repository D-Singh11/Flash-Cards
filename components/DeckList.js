import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckCard from './DeckCard';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/decks';

class DeckList extends Component {
    componentDidMount(){
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 33, color: 'orange' }}>DeckList</Text>

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
        width: 200,
        height: 100,
        borderColor: '#323',
        borderBottomWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default connect()(DeckList);