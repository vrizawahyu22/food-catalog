import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const HamburgerMenu = ({onPress}) => (
  <TouchableOpacity style={styles.headerButtonContainer} onPress={onPress}>
    <Image
      style={styles.headerButtonImage}
      source={require('../../../../assets/icons/menu.png')}
    />
  </TouchableOpacity>
);

HamburgerMenu.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default HamburgerMenu;
