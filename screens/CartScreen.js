import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const data = [
  {
    id: 1,
    name: 'Bacon Egg',
    price: '$100',
    quantity: 1,
    img: require('../assets/food.jpg'),
  },
  {
    id: 2,
    name: 'Raost Coffe',
    price: '$100',
    quantity: 1,
    img: require('../assets/food.jpg'),
  },
  {
    id: 3,
    name: 'McGriddle',
    price: '$100',
    quantity: 1,
    img: require('../assets/food.jpg'),
  },
];
const CartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>In the Cart 3 Dishes for $18.77</Text>
      {data.map(item => (
        <View style={styles.Minicontainer}>
          <View style={styles.Left}>
            <Image source={item.img} style={styles.TopImg} />
          </View>
          <View style={styles.Right}>
            <Text style={[styles.Text, {paddingLeft: 0}]}>{item.name}</Text>
            <View style={styles.RightBottom}>
              <View style={styles.RightBottomRight}>
                <TouchableOpacity>
                  <AntDesign
                    name="minus"
                    size={20}
                    color="grey"
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity>
                  <AntDesign
                    name="plus"
                    size={20}
                    color="grey"
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <Text>{item.price}</Text>
            </View>
          </View>
        </View>
      ))}
      <View style={styles.delivery}>
        <View style={styles.deli}>
          <FontAwesome5 name="box" size={21} color="black" />
          <Text style={styles.Text}>Delivery</Text>
        </View>
        <Text style={styles.Text}>$5.00</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Text}>Clear All</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.checkout}
        onPress={() => navigation.navigate('SelectPayment')}>
        <Text style={[styles.Text, {color: 'white'}]}>Checkout - $21.52</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 15,
  },
  HeaderText: {
    width: 343,
    fontSize: 28,
    fontWeight: '500',
    color: '#1c1c1c',
    marginLeft: 15,
  },
  Minicontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 2,
    marginLeft: 15,
  },
  TopImg: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 17,
  },
  Left: {
    width: 80,
    height: 80,
    borderRadius: 17,
    overflow: 'hidden',
  },
  Right: {
    flex: 1,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  RightBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  RightBottomRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 3,
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
  },
  quantity: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1c1c1c',
    marginHorizontal: 9,
  },
  delivery: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  deli: {
    flexDirection: 'row',
  },

  Text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1c1c1c',
    paddingLeft: 15,
  },
  btn: {
    backgroundColor: '#f9fafd',
    padding: 15,
    borderRadius: 20,
    marginTop: 15,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkout: {
    backgroundColor: '#1c1c1e',
    padding: 15,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
