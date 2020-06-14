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

                {Object.keys(decks).map(deck => {
                    return (
                        <View key={deck}>
                            <TouchableOpacity
                                //Todo: Update navigation to actual deck once Stack Navigation is implemented
                                onPress={() => { this.props.navigation.navigate('Add Deck', { key: deck }) }}
                            >
                                <DeckCard title={deck} cardCount={decks[deck].questions.length} />
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

function mapStateToProps(decks) {
    return {
        decks
    }
}
export default connect(mapStateToProps)(DeckList);