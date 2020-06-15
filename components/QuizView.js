import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class QuizView extends Component {
    state = {
        question: this.props.deck.questions[0],
        qIndex: 0,
        score: 0
    }

    checkAnswer(answer) {
        
    }

    render() {

        return (
            <View style={styles.quiz}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 24 }}>Question {this.state.qIndex + 1}</Text>
                    <Text>{this.props.deck.questions.length - (this.state.qIndex + 1)} cards left</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 28 }}>{this.state.question.question}</Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'red' }}>view answer</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.correctBtn}
                        onPress={() => { this.checkAnswer('correct') }}
                    >
                        <Text style={styles.btnText}>Correct</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.incorrectBtn}
                        onPress={() => { this.checkAnswer('incorrect') }}
                    >
                        <Text style={styles.btnText}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    quiz: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    correctBtn: {
        height: 40,
        width: 100,
        backgroundColor: 'green',
        borderRadius: 5,
        padding: 10,
        paddingLeft: 25,
    },
    incorrectBtn: {
        height: 40,
        width: 100,
        borderRadius: 5,
        backgroundColor: 'red',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
    },
    btnText: {
        fontWeight: 'bold',
        color: 'white'
    },
})

function mapStateToProps(state, props) {
    const deckId = props.route.params.deckId;

    return {
        deck: state[deckId]
    }
}

export default connect(mapStateToProps)(QuizView);