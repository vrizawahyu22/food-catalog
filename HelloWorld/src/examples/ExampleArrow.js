import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ExampleArrow = () => {
  return (
    <View style={styles.root}>
      <Text>Ini Arrow Function!</Text>
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

export default ExampleArrow;
