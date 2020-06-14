import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AddQuestion extends Component {
    render() {
        return (
            <View style={styles.question}>
                <Text>Add question</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    question: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
