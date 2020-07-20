import React from 'react';
import {TouchableHighlight, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BackIcon = (props) => {
  const {onPress} = props;
  return (
    <TouchableHighlight onPress={onPress} style={styles.btnContainer}>
      <Image
        source={require('../../../../assets/icons/backArrow.png')}
        style={styles.btnIcon}
      />
    </TouchableHighlight>
  );
};

BackIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackIcon;
