import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DeckCard from './DeckCard';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/decks';

class DeckList extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        const { decks } = this.props;
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 33, color: 'orange' }}>DeckList</Text>

                {decks.map(deck => {
                    return (
                        <View key={deck.id}>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('Deck Detail', { deckId: deck.id }) }}
                            >
                                <DeckCard title={deck.title} cardCount={deck.totalCards} />
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deck: {
        width: 200,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

function mapStateToProps(state) {
    const decks = Object.keys(state).map(id => {
        return {
            id,
            title: state[id].title,
            totalCards: state[id].questions.length
        }
    })
    return {
        decks
    }
}
export default connect(mapStateToProps)(DeckList);