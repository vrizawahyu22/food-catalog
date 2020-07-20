import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>Ini Class Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
