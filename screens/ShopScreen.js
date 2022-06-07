import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {Searchbar} from 'react-native-paper';
import FoodCard from '../components/FoodCard';

const data = [
  {
    imgs: require('../assets/food.jpg'),
    title: 'American Burger',
    rating: '4.5',
    price: 'RS. 1000',
  },
  {
    imgs: require('../assets/food.jpg'),
    title: 'American Burger',
    rating: '4.5',
    price: 'RS. 1000',
  },
  {
    imgs: require('../assets/food.jpg'),
    title: 'American Burger',
    rating: '4.5',
    price: 'RS. 1000',
  },
  {
    imgs: require('../assets/food.jpg'),
    title: 'American Burger',
    rating: '4.5',
    price: 'RS. 1000',
  },
  {
    imgs: require('../assets/food.jpg'),
    title: 'American Burger',
    rating: '4.5',
    price: 'RS. 1000',
  },
];
const ShopScreen = ({navigation}) => {
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
          <FoodCard
            imgs={item.imgs}
            title={item.title}
            rating={item.rating}
            price={item.price}
            onPress={() => navigation.navigate('Details')}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default ShopScreen;

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
