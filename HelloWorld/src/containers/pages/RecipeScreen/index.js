import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import styles from './styles';
import BackIcon from '../../../components/atoms/BackIcon';
import Text from '../../../components/atoms/Text';
import Button from '../../../components/molecules/Button';

const RecipeScreen = ({navigation}) => {
  const item = navigation.getParam('item');
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.photosArray[0]}} />
      </View>
      <View style={styles.infoRecipeContainer}>
        <View style={styles.infoRecipeName}>
          <Text variant="h2">{item.title}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Image
            style={styles.infoPhoto}
            source={require('../../../../assets/icons/time.png')}
          />
          <View style={styles.infoRecipe}>
            <Text style={styles.bold}>{item.time} minutes </Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Button value="View Ingredients" size="large" onPress={() => {}} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoDescriptionRecipe}>
            <Text>{item.description}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

RecipeScreen.navigationOptions = ({navigation}) => ({
  headerTransparent: 'true',
  headerLeft: (
    <BackIcon
      onPress={() => {
        navigation.goBack();
      }}
    />
  ),
});

export default RecipeScreen;
