import React from 'react';
import {View} from 'react-native';
import ListMenu from '../../../components/molecules/ListMenu';
import styles from './styles';

const DrawerContainer = ({navigation}) => {
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <ListMenu
          title="HOME"
          source={require('../../../../assets/icons/home.png')}
          onPress={() => {
            navigation.closeDrawer();
          }}
        />
        <ListMenu
          title="CATEGORIES"
          source={require('../../../../assets/icons/category.png')}
          onPress={() => {
            navigation.closeDrawer();
          }}
        />
        <ListMenu
          title="SEARCH"
          source={require('../../../../assets/icons/search.png')}
          onPress={() => {
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
};

export default DrawerContainer;
