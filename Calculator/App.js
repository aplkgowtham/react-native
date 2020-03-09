import React from 'react';
import { StyleSheet, View } from 'react-native';
import CalculatorResponse from './components/CalculatorResponse';
import CalculatorButtonsContainer from './components/CalculatorButtonsContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      first: '0',
      second: '',
      input: [],
      operator: '',
      result: 0,
      isResult: false,
      count: 0,
    };
    console.log('constructor');
  }

  getResult = () => {
    const { first, second, operator, input } = this.state;
    let j,
      i,
      add = 0,
      sub = 0,
      mul = 0,
      div = 0,
      result = 0;

    for (j = 0; j < operator.length; j++) {
      if (operator[j] === '/') div++;
      if (operator[j] === '×') mul++;
      if (operator[j] === '+') add++;
      if (operator[j] === '−') sub++;
    }
    for (i = 0; i < input.length; i++) {
      if (div > 0) {
        for (j = 0; j < input.length; j++) {
          if (input[j] === '/') {
            result = parseFloat(
              parseFloat(input[j - 1]) / parseFloat(input[j + 1])
            ).toFixed(4);
            input[j - 1] = result;
            input.splice(j, 2);
          }
        }
        div--;
      }
      if (mul > 0) {
        for (j = 0; j < input.length; j++) {
          if (input[j] === '×') {
            result = parseFloat(input[j - 1]) * parseFloat(input[j + 1]);
            input[j - 1] = result;
            input.splice(j, 2);
          }
        }
        mul--;
      }
      if (add > 0) {
        for (j = 0; j < input.length; j++) {
          if (input[j] === '+') {
            result = parseFloat(input[j - 1]) + parseFloat(input[j + 1]);
            input[j - 1] = result;
            input.splice(j, 2);
          }
        }
        add--;
      }
      if (sub > 0) {
        for (j = 0; j < input.length; j++) {
          if (input[j] === '−') {
            result = parseFloat(input[j - 1]) - parseFloat(input[j + 1]);
            input[j - 1] = result;
            input.splice(j, 2);
          }
        }
        sub--;
      }
    }

    this.setState({
      result: input,
      isResult: true,
    });
  };

  refresh = () => {
    this.setState({
      first: '0',
      second: '',
      operator: '',
      result: 0,
      input: [],
      isResult: false,
    });
  };

  handleButtonPress = button => {
    const { isResult } = this.state;
    let { first, second, operator, input } = this.state;

    switch (button) {
      case '0':
        if (!isResult) {
          if (!operator) {
            if (first[0] !== '0' || first.length !== 1) {
              first += '0';
              input.push('0');
            }
          } else if (second[0] !== '0' || second.length !== 1) {
            second += '0';
            input.push('0');
          } else {
            second = '0';
          }
          this.setState({ first, second, operator, input });
        } else {
          this.setState({
            first: '0',
            second: '',
            operator: '',
            result: 0,
            isResult: false,
          });
        }
        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (!isResult) {
          if (!operator) {
            if (first[0] === '0' && first.length === 1) {
              first = button;
              input.push(button);
            } else {
              first += button;
              input.push(button);
            }
          } else if (second[0] === '0' && second.length === 1) {
            second = button;
            input.push(button);
          } else {
            second += button;
            input.push(button);
          }

          this.setState({ first, second, operator, input });
        } else {
          this.setState({
            first: button,
            second: '',
            operator: '',
            result: 0,
            isResult: false,
            input: [],
          });
        }
        break;
      case '.':
        if (!operator) {
          if (!first.includes('.')) {
            first += button;
            input.push(button);
          }
        } else if (!second.includes('.')) {
          second += button;
          input.push(button);
        }

        this.setState({ first, second, operator, input });

        break;
      case '+':
      case '−':
      case '×':
      case '/':
        if (!operator && input === []) {
          operator += button;
          input.push(button);
          this.setState({ first, second, operator, input });
        } else if (input !== '') {
          input.push(button);
          operator += button;
          this.setState({ input, operator });
        }
        break;
      case '=':
        this.getResult();
        break;
      default:
      // console.log('wrong operator');
    }
  };

  render() {
    const { first, second, operator, result, input, count } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <CalculatorResponse
            first={first}
            second={second}
            operator={operator}
            result={result}
            input={input}
            refresh={this.refresh}
            count={count}
          />
        </View>

        <View style={styles.container}>
          <CalculatorButtonsContainer
            handleButtonPress={this.handleButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
  },
});

export default App;
