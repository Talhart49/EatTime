import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const RecipesDestails = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <ImageBackground
          source={require('../assets/recipe.jpg')}
          style={styles.img}
        />
        <View style={styles.textView}>
          <Text style={[styles.imageText, {fontSize: 17, fontWeight: '500'}]}>
            Plate
          </Text>
          <Text style={[styles.imageText, {fontSize: 22, fontWeight: '600'}]}>
            South of France
          </Text>
          <Text style={[styles.imageText, {fontSize: 22, fontWeight: '600'}]}>
            (Variation with figs)
          </Text>
        </View>
      </View>
      <View style={styles.infoTop}>
        <View style={styles.infoHeader}>
          <Text
            style={[
              styles.text,
              {fontSize: 15, fontWeight: '200', color: 'grey'},
            ]}>
            Cooking
          </Text>
          <Text style={styles.text}>20 min</Text>
        </View>
        <View style={styles.infoHeader}>
          <Text
            style={[
              styles.text,
              {fontSize: 15, fontWeight: '200', color: 'grey'},
            ]}>
            Level
          </Text>
          <Text style={styles.text}>Amature</Text>
        </View>
        <View style={styles.infoHeader}>
          <Text
            style={[
              styles.text,
              {fontSize: 15, fontWeight: '200', color: 'grey'},
            ]}>
            Rating
          </Text>
          <Text style={styles.text}>4.8</Text>
        </View>
      </View>

      <View>
        <Text style={styles.header}>Ingredients</Text>
        <View style={styles.servings}>
          <Text style={styles.serve}> 4 Servings</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Feather name="minus" size={23} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="plus" size={23} color="grey" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipesDestails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  item: {
    width: '100%',
    height: 439,
    margin: 0,
    padding: 0,
  },
  img: {
    width: '100%',
    height: 472,
    resizeMode: 'contain',
  },
  topTextView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
  },
  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 250,
    left: 0,
    right: 0,
    bottom: 0,
  },
  topText: {
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

  imageText: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
  },
  infoTop: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 0,
    paddingTop: 0,
  },
  infoHeader: {
    justifyContent: 'space-evenly',
    marginTop: 0,
    paddingHorizontal: 35,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    borderRightWidth: 1,
    borderRightColor: 'lightgrey',
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.37400001287460327,
    textAlign: 'center',
    color: '#1C1C1E',
  },
  header: {
    fontFamily: 'Inter',
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 28,
    letterSpacing: 0.37400001287460327,
    textAlign: 'left',
    color: '#1C1C1E',
    marginTop: 9,
    marginLeft: 19,
  },
  servings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: 7,
  },
});
