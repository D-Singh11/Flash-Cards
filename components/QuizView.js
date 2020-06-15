import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class QuizView extends Component {
    state = {
        qIndex: 0,
        score: 0
    }

    checkAnswer(answer) {
        const { qIndex } = this.state;
        const { deck } = this.props;
        let qScore = 0;

        if (answer === deck.questions[qIndex].answer) {                        // check if user's answer is correct
            qScore++;                                                        // increment score by 1 if answer is corrct
        }

        const nextQIndex = qIndex + 1                            // get index of current question and add 1 for next question index. it is used in JSX to display next question

        this.setState({                                                      // update state so that react component view can be updated to show new question
            qIndex: nextQIndex,
            score: this.state.score + qScore,
        })
    }

    render() {
        const { qIndex } = this.state;            // destructure index from local state
        const { deck } = this.props;              // destructire 'deck' property from props

        return (
            <View style={styles.quiz}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 24 }}>Question {qIndex + 1}</Text>
                    <Text>{deck.questions.length - (qIndex + 1)} cards left</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 28 }}>{deck.questions[qIndex].question}</Text>
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