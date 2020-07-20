import React from 'react';
import {FlatList, View} from 'react-native';
import {recipes} from '../../../../data/dataArrays';
import HamburgerMenu from '../../../components/atoms/HamburgerMenu';
import ProductThumbnail from '../../../components/molecules/ProductThumbnail';

const HomeScreen = ({navigation}) => {
  const onPressRecipe = (item) => {
    navigation.navigate('Recipe', {item});
  };

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={(item) => (
          <ProductThumbnail item={item.item} onPress={onPressRecipe} />
        )}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
};

HomeScreen.navigationOptions = ({navigation}) => ({
  title: 'Home',
  headerLeft: (
    <HamburgerMenu
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  ),
});

export default HomeScreen;
