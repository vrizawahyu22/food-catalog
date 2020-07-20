import React from 'react';
import propTypes from 'prop-types';
import {Text} from 'react-native';

const createTypography = {
  h1: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  h2: {
    fontSize: 28,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  h3: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  h4: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  body1: {
    fontSize: 17,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  body2: {
    fontSize: 15,
    fontWeight: '300',
    fontStyle: 'normal',
  },
  caption1: {
    fontSize: 13,
    fontWeight: '300',
    fontStyle: 'normal',
  },
  caption2: {
    fontSize: 12,
    fontWeight: '300',
    fontStyle: 'normal',
  },
};

const CustomText = (props) => {
  const {children, variant, style, textAlign} = props;

  return (
    <Text style={[createTypography[variant], {textAlign: textAlign}, style]}>
      {children}
    </Text>
  );
};

CustomText.propTypes = {
  children: propTypes.node.isRequired,
  variant: propTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'body1',
    'body2',
    'caption1',
    'caption2',
  ]),
  style: propTypes.object,
  textAlign: propTypes.string,
};

CustomText.defaultProps = {
  variant: 'body2',
  style: null,
  textAlign: 'left',
};

export default CustomText;
