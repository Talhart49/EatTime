import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  {
    id: 1,
    carnNumber: '**** **** **** 8841',
  },
  {
    id: 2,
    carnNumber: '**** **** **** 8842',
  },

  {
    id: 3,
    carnNumber: '**** **** **** 8843',
  },
  {
    id: 3,
    carnNumber: '**** **** **** 8843',
  },
  {
    id: 3,
    carnNumber: '**** **** **** 8843',
  },
];

const SelectPayment = ({navigation}) => {
  return (
    <ScrollView style={styles.Maincontainer}>
      {data.map(item => (
        <TouchableOpacity style={styles.container}>
          <Image
            source={require('../assets/mastercard.png')}
            style={styles.cardImg}
          />
          <Text style={styles.text}>{item.carnNumber}</Text>
        </TouchableOpacity>
      ))}
      <View>
        <TouchableOpacity
          style={styles.addCard}
          onPress={() => {
            navigation.navigate('NewCard');
          }}>
          <AntDesign name="plus" size={19} color="#000" style={styles.add} />
          <Text style={styles.addCardText}>Add a new Card</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SelectPayment;

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 37,
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 15,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
    color: '#1c1c1c',
    marginHorizontal: 10,
  },
  addCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginTop: 15,
    marginHorizontal: 10,
  },
  addCardText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1c1c1c',
    marginHorizontal: 10,
  },
  add: {
    marginRight: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
  },
  btn: {
    backgroundColor: '#007EFF',
    padding: 15,
    marginVertical: 40,
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 17,
    fontWeight: '500',
    color: '#fff',
  },
  cardImg: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
