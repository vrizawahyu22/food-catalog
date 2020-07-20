import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HelloWorldApp = (props) => {
  return (
    <View style={styles.root}>
      <Text>Ini Functional Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HelloWorldApp;
