import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class CalculatorResponse extends React.Component {
    render() {
        const { first, second, operator, result, input, refresh } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.resultContainer}>
                    <Text style={styles.result}>{result}</Text>
                </View>

                <View style={styles.checkContainer}>
                    <TouchableOpacity onPress={refresh}>
                        <Text style={styles.delete}>AC</Text>
                    </TouchableOpacity>

                    <Text style={styles.check}>
                        {first === '0' && !operator ? 'Enter your operation' : input}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    resultContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: '#258FB4',
        paddingVertical: 5,
        paddingRight: 10,
        width: wp(100),
        marginTop: 20,
        marginBottom: 2,
        flex: 1,
    },
    result: {
        color: '#fff',
        fontSize: 42,
    },
    checkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#2BA5CF',
        paddingHorizontal: 10,
        alignItems: 'center',
        margin: 1,
        width: wp(100),
        flex: 1,
    },

    delete: {
        color: '#fff',
        fontSize: 23,
        paddingVertical: 5,
    },

    check: {
        color: 'white',
        fontSize: 23,
        padding: 5,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
});

export default CalculatorResponse;
