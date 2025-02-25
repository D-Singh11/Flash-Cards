import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';

class AddQuestion extends Component {
    state = {
        question: '',
        answer: ''
    }

    handleSave = () => {
        const deckId = this.props.route.params.deckId;
        const card = this.state;
        this.props.dispatch(handleAddQuestion(deckId, card));
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.question}>
                <View>
                    <Text>Enter question</Text>
                    <TextInput style={styles.textInput}
                        placeholder='enter your question'
                        multiline={true}
                        textAlign='center'
                        onChangeText={(question => { this.setState({ question }) })}
                    />
                </View>

                <View>
                    <Text>Answer</Text>
                    <TextInput style={styles.textInput}
                        placeholder='enter your answer'
                        textAlign='center'
                        onChangeText={(answer => { this.setState({ answer }) })}
                    />
                </View>

                <TouchableOpacity style={styles.saveBtn} onPress={this.handleSave}
                    disabled={this.state.question.length === 0 || this.state.answer.length === 0}
                >
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    question: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 50,
        width: 300,
        borderWidth: 1,
        marginBottom: 50
    },
    saveBtn: {
        backgroundColor: 'black',
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 5,
        height: 45,
        marginTop: 10,
    }
})

export default connect()(AddQuestion);
