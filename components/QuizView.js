import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated } from 'react-native';
import { connect } from 'react-redux';

class QuizView extends Component {
    state = {
        qIndex: 0,
        score: 0
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);

        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg']
        })

        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })
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

    flipCard=()=>{
        Animated.timing(this.animatedValue, {
            toValue: 180,
            duration: 800
        }).start();
    }

    render() {

        const frontAnimatedStyle = {
            transform: [
                { rotateX: this.frontInterpolate }
            ]
        }

        const backAnimatedStyle = {
            transform: [
                { rotateX: this.backInterpolate }
            ]
        }

        const { qIndex } = this.state;            // destructure index from local state
        const { deck } = this.props;              // destructire 'deck' property from props

        return (
            deck.questions.length > qIndex
                ? <View style={styles.quiz}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 24 }}>Question {qIndex + 1}</Text>
                        <Text>{deck.questions.length - (qIndex + 1)} cards left</Text>
                    </View>

                    <Animated.View style={[{ alignItems: 'center', backfaceVisibility: 'hidden' }, frontAnimatedStyle]}>
                        <Text style={{ fontSize: 28 }}>{deck.questions[qIndex].question}</Text>
                        <TouchableOpacity 
                        onPress={this.flipCard}
                        >
                            <Text style={{ color: 'red' }}>view answer</Text>
                        </TouchableOpacity>
                    </Animated.View>

                    {/* todo : implement flip card back to question */}
                    <Animated.View style={[backAnimatedStyle, { alignItems: 'center', backfaceVisibility: 'hidden' } ]}>
                        <Text style={{ fontSize: 28 }}>{deck.questions[qIndex].answer}</Text>
                        <TouchableOpacity onPress={this.flipCard}>
                            <Text style={{ color: 'red' }}>view question</Text>
                        </TouchableOpacity>
                    </Animated.View>

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
                : (
                    <View style={styles.quiz}>
                        <Text style={{ fontSize: 28 }}>Percentage correct : {Math.floor((this.state.score / deck.questions.length) * 100)} </Text>
                    </View>
                )
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