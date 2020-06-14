import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class DeckView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{fontSize:24}}>{this.props.route.params.deckId}</Text>
                    <Text>{this.props.deckDetail.totalCards} cards</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20
    }
})


function mapStateToProps(state, props) {
    const deckId = props.route.params.deckId
    return {
        deckDetail: {
            title: state[deckId].title,
            totalCards: state[deckId].questions.length
        }
    }
}

export default connect(mapStateToProps)(DeckView);
