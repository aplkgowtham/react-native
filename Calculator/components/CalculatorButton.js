import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class CalculatorButton extends React.Component {
    render() {
        const { operator, handleButtonPress } = this.props;

        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => handleButtonPress(operator)} >
                <Text style={styles.item}>
                    {operator}
                </Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        backgroundColor: '#35C2F3'
    },
    item: {
        color: '#fff',
        fontSize: 26,
    },
});

export default CalculatorButton;
