import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class AddDeck extends Component {
    state = {
        inputText: ''
    }
    render() {
        return (
            <View style={styles.newDeck}>
                <Text style={{ fontSize: 24 }}>Enter title for new deck</Text>
                <TextInput style={{ height: 50, width: 300, borderWidth: 1, borderColor: 'gray' }}
                    placeholder='Add new Deck'
                    multiline={true}
                    textAlign='center'
                    value={this.state.inputText}
                    onChangeText={(inputValue) => this.setState({ inputText: inputValue })}
                />
                <TouchableOpacity style={styles.saveBtn} disabled={this.state.inputText.length === 0}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    newDeck: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    saveBtn: {
        backgroundColor: 'green',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 2,
        height: 45,
        marginTop: 10
    }
})
