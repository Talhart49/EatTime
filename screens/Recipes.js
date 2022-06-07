import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {Searchbar} from 'react-native-paper';
import RecipeCard from '../components/RecipeCard';

const data = [
  {
    imgs: require('../assets/food.jpg'),
    title: 'American Burger',
    description:
      'lorem ipsum dolor sit amet, consect lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lore ',
    date: 'Added 4 days ago',
  },
  {
    imgs: require('../assets/recipe.jpg'),
    title: 'American Burger',
    description:
      'lorem ipsum dolor sit amet, consect lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lore ',
    date: 'Added 4 days ago',
  },
  {
    imgs: require('../assets/recipe.jpg'),
    title: 'American Burger',
    description:
      'lorem ipsum dolor sit amet, consect lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lore ',
    date: 'Added 4 days ago',
  },
  {
    imgs: require('../assets/recipe.jpg'),
    title: 'American Burger',
    description:
      'lorem ipsum dolor sit amet, consect lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lore ',
    date: 'Added 4 days ago',
  },
  {
    imgs: require('../assets/recipe.jpg'),
    title: 'American Burger',
    description:
      'lorem ipsum dolor sit amet, consect lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lore ',
    date: 'Added 4 days ago',
  },
];
const Recipes = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search your favourite food"
        style={styles.searchbar}
      />
      <FlatList
        nestedScrollEnabled
        data={Object.values(data)}
        renderItem={({item}) => (
          <RecipeCard
            imgs={item.imgs}
            title={item.title}
            description={item.description}
            date={item.date}
            onPress={() => navigation.navigate('Browse')}
          />
        )}
        horizontal={false}
      />
    </View>
  );
};

export default Recipes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  searchbar: {
    marginTop: 17,
    marginHorizontal: 22,
    borderRadius: 19,
  },
});
