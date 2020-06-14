import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class DeckView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{ fontSize: 24 }}>{this.props.route.params.deckId}</Text>
                    <Text>{this.props.deckDetail.totalCards} cards</Text>
                </View>
                <TouchableOpacity style={styles.addBtn}
                    onPress={() => { this.props.navigation.navigate('Add Question'), { deckId: this.props.route.params.deckId } }}
                >
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Add Card</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.quizBtn}>
                    <Text style={{ fontWeight: 'bold' }}>Start Quiz</Text>
                </TouchableOpacity>
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
    },
    addBtn: {
        height: 50,
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 15,
        paddingLeft: 51,
        paddingRight: 51
    },
    quizBtn: {
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        padding: 15,
        paddingLeft: 50,
        paddingRight: 50
    },

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
