import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
                        <View>
                            <DeckCard title={deck} />
                            <Text>Cards : {decks[deck].questions.length}</Text>

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

function mapStateToProps(decks) {
    return {
        decks
    }
}
export default connect(mapStateToProps)(DeckList);