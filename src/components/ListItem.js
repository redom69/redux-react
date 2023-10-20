import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


export default ({ desc, onPress, completed }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {completed
                ? <Text style={[styles.text, styles.strike]}>{desc}</Text>
                : <Text style={styles.text}>{desc}</Text>
            }
        </TouchableOpacity>


    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        height: 60,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    text: {
        fontSize: 18
    },
    strike: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    }
});