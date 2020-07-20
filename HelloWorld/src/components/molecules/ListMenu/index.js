import React from 'react';
import {TouchableHighlight, Image, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Text from '../../atoms/Text';

const ListMenu = (props) => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.btnClickContain}
      underlayColor="rgba(128, 128, 128, 0.1)">
      <View style={styles.btnContainer}>
        <Image source={props.source} style={styles.btnIcon} />
        <View style={styles.btnText}>
          <Text>{props.title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ListMenu.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};

export default ListMenu;
