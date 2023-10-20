import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#eee',
        alignSelf: 'stretch',
        height: 34,
        padding: 8
    },

});

const Input = ({ onChange, value, onSubmit }) => {
    return (
        <TextInput onSubmitEditing={onSubmit} onChangeText={onChange} style={styles.input} value={value} />
    )
}

export default Input