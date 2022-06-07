import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

export default function RecipeCard({imgs, title, description, date, ...rest}) {
  return (
    <TouchableOpacity style={styles.recipe} {...rest}>
      <View style={styles.recipeImage}>
        <Image style={styles.image} source={imgs} />
      </View>
      <View style={styles.recipeDetails}>
        <View style={styles.details}>
          <Text style={styles.recipeName}>{title}</Text>
          <Text style={styles.recipeDescription}>{description}</Text>
        </View>

        <View style={styles.controls}>
          <Text style={styles.date}>{date}</Text>
          <Icon
            name="heart-outline"
            size={17}
            color="red"
            style={{paddingRight: 5}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  recipe: {
    width: 365,
    height: 160,
    flexDirection: 'row',
    margin: 17,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#FFFFFF',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,

    elevation: 5,
  },
  recipeImage: {
    width: '35%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  recipeDetails: {
    width: '65%',
    height: '100%',
    paddingVertical: 10,
    paddingHorizontal: 18,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1c1c1c',
    marginBottom: 5,
  },
  recipeDescription: {
    fontSize: 14,
    color: '#757575',
    fontWeight: '500',
    lineHeight: 18,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 7,
  },
  date: {
    fontSize: 12,
    color: '#2AC769',
  },
});
