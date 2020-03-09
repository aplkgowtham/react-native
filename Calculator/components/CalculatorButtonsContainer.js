import React from 'react';
import { View, StyleSheet } from 'react-native';
import CalculatorButton from './CalculatorButton';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class CalculatorButtonsContainer extends React.Component {
    render() {
        const { handleButtonPress } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <CalculatorButton operator={'+'} handleButtonPress={handleButtonPress} />
                    <CalculatorButton operator={'−'} handleButtonPress={handleButtonPress} />
                    <CalculatorButton operator={'×'} handleButtonPress={handleButtonPress} />
                    <CalculatorButton operator={'/'} handleButtonPress={handleButtonPress} />
                </View>

                <View style={styles.row}>
                    <CalculatorButton operator={'7'} handleButtonPress={handleButtonPress} />
                    <CalculatorButton operator={'8'} handleButtonPress={handleButtonPress} />
                    <CalculatorButton operator={'9'} handleButtonPress={handleButtonPress} />
                </View>

                <View style={styles.row}>
                    <CalculatorButton operator={'4'} handleButtonPress={handleButtonPress} />
                    <CalculatorButton operator={'5'} handleButtonPress={handleButtonPress} />
                    <CalculatorButton operator={'6'} handleButtonPress={handleButtonPress} />
                </View>

                <View style={styles.row}>
                    <CalculatorButton operator={'1'} handleButtonPress={handleButtonPress} />
                    <CalculatorButton operator={'2'} handleButtonPress={handleButtonPress} />
                    <CalculatorButton operator={'3'} handleButtonPress={handleButtonPress} />
                </View>

                <View style={styles.row}>
                    <CalculatorButton operator={'0'} handleButtonPress={handleButtonPress} />
                    <CalculatorButton operator={'.'} handleButtonPress={handleButtonPress} />
                    <CalculatorButton operator={'='} handleButtonPress={handleButtonPress} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: wp(100),
        marginLeft: 1
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
});

export default CalculatorButtonsContainer;
