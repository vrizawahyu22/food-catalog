import React from 'react';
import propTypes from 'prop-types';
import {View, TouchableHighlight, Image} from 'react-native';
import Text from '../../../components/atoms/Text';
import {getCategoryName} from '../../../../data/MockDataAPI';
import styles from './styles';

const ProductThumbnail = (props) => {
  const {item, onPress} = props;

  return (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => onPress(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item.photo_url}} />
        <View style={styles.title}>
          <Text variant="body1" textAlign="center">
            {item.title}
          </Text>
        </View>
        <View style={styles.category}>
          <Text>{getCategoryName(item.categoryId)}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ProductThumbnail.propTypes = {
  item: propTypes.object.isRequired,
  onPress: propTypes.func.isRequired,
};

export default ProductThumbnail;
