import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {AuthContext} from '../navigation/AuthProvider';

import firestore from '@react-native-firebase/firestore';

const HomeScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>
        Select one of the options below to continue.
      </Text>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Orders')}>
        <ImageBackground
          source={require('../assets/food.jpg')}
          style={styles.img}
        />
        <View style={styles.textView}>
          <Text style={styles.imageText}>Food Delivery</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Recipes')}>
        <ImageBackground
          source={require('../assets/recipe.jpg')}
          style={styles.img}
        />
        <View style={styles.textView}>
          <Text style={styles.imageText}>Recipe Guide</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  Text: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.37400001287460327,
    textAlign: 'left',
    color: '#1C1C1E',
    width: '70%',
    marginRight: 39,
  },
  item: {
    width: 343,
    height: 172,
    marginVertical: 15,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  minortext: {
    lineHeight: 22,
    letterSpacing: -0.40799999237060547,
    textAlign: 'center',
  },
  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 90,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageText: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '800',
    color: '#1A9F32',
  },
});
