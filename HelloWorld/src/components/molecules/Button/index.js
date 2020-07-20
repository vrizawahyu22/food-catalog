import React from 'react';
import {TouchableHighlight, View} from 'react-native';
import propTypes from 'prop-types';
import Text from '../../atoms/Text';
import styles from './styles';

const Button = (props) => {
  const {value, onPress, size} = props;
  return (
    <TouchableHighlight underlayColor="rgba(73,182,77,1,0.9)" onPress={onPress}>
      <View style={[styles.container, styles[`${size}`]]}>
        <Text style={styles.primary}>{value}</Text>
      </View>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  size: propTypes.oneOf(['small', 'medium', 'large']),
  value: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
};

Button.defaultProps = {
  size: 'medium',
};

export default Button;
