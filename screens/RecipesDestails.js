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
import {Avatar, Title, Caption, Drawer, TextInput} from 'react-native-paper';

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
              <Feather name="minus" size={23} color="grey" style={styles.btn} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="plus" size={23} color="grey" style={styles.btn} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ingredients}>
          <View style={styles.ingredient}>
            <Text style={styles.ingredientName}>Brioche </Text>
            <Text style={styles.ingredientQuantity}>4 Slices</Text>
          </View>
          <View style={styles.ingredient}>
            <Text style={styles.ingredientName}>Rhubarb </Text>
            <Text style={styles.ingredientQuantity}>300 g</Text>
          </View>
          <View style={styles.ingredient}>
            <Text style={styles.ingredientName}>Sugar </Text>
            <Text style={styles.ingredientQuantity}>50 g</Text>
          </View>
          <View style={styles.ingredient}>
            <Text style={styles.ingredientName}>Salt </Text>
            <Text style={styles.ingredientQuantity}>5 g</Text>
          </View>
          <View style={styles.ingredient}>
            <Text style={styles.ingredientName}>figs </Text>
            <Text style={styles.ingredientQuantity}>75 g</Text>
          </View>
        </View>
        <Text style={[styles.header, {marginTop: 19, marginBottom: 7}]}>
          Procedure
        </Text>
        <Text style={styles.para}>
          Preheat oven to 425°. Set ducks, breast side down, on a work surface
          and score fatty areas along backs and thighs with a paring knife,
          being careful not to cut into flesh. Turn over and score fat,
          concentrating mainly on breasts but extending to tops of legs. Poke a
          few holes around extra-fatty areas of cavity. Stuff ducks with onions
          and all but 4 sprigs rosemary; season generously with salt and pepper
          (much of the seasoning will melt away as the fat renders). Place
          ducks, breast side down, in a large roasting pan; pour in ½ cup water.
          Roast, rotating pan occasionally, until duck fat starts to render,
          water is evaporated, and skin is golden brown, about 40 minutes.
          Remove pan from oven and transfer ducks to a platter or baking dish.
          Carefully pour rendered fat into a heatproof measuring cup. Toss
          potatoes and ¼ cup duck fat in roasting pan (save remaining fat for
          another use); season with salt and pepper.
          {'\n'}
          {'\n'}
          Scoot potatoes to perimeter and return ducks to pan, breast side up.
          Roast until potatoes and dark meat are tender and an instant-read
          thermometer inserted into breasts registers 155°, 50–60 minutes.
          Transfer ducks to a cutting board; let rest at least 10 minutes before
          carving. Meanwhile, add figs and remaining 4 rosemary sprigs to pan;
          toss well. Roast until figs are soft and juicy, 5–8 minutes. Serve
          duck with figs and potatoes.
        </Text>

        <Text style={[styles.header, {marginTop: 19, marginBottom: 7}]}>
          Ratings
        </Text>

        <View style={styles.rating}>
          <View style={styles.Myrating}>
            <View style={styles.MyratingTop}>
              <Avatar.Image
                source={require('../assets/placer.png')}
                size={50}
              />
              <TextInput style={styles.ratingText} placeholder="Write Review" />
            </View>
            <View style={styles.MyratingBottom}></View>
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
    fontSize: 17,
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
  serve: {
    fontFamily: 'Inter',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.37400001287460327,
    textAlign: 'left',
    color: '#1C1C1E',
  },
  btn: {
    paddingHorizontal: 7,
    backgroundColor: '#7676801F',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  ingredients: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  ingredient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: 7,
  },
  ingredientName: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.37400001287460327,
    textAlign: 'left',
    color: '#1C1C1E',
  },
  ingredientQuantity: {
    fontFamily: 'Inter',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.37400001287460327,
    textAlign: 'left',
    color: '#3C3C4399',
  },
  para: {
    fontFamily: 'Inter',
    fontSize: 15,
    color: '#1C1C1E',
    lineHeight: 20,
    marginTop: 9,
    marginLeft: 19,
  },
  MyratingTop: {
    width: '100%',
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: 7,
    alignItems: 'center',
  },
  ratingText: {
    width: '100%',
    backgroundColor: '#F2F2F2',
  },
  
});
