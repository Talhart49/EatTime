import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {windowHeight} from '../Utils/Dimensions';
import UserType from '../components/UserType';

const SelectType = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.minor}>
        <Image source={require('../assets/salad.png')} style={styles.logo} />
        <Text style={styles.text}>EatTime!</Text>
        <Text
          style={[
            styles.text,
            {fontSize: 18, fontWeight: '600', marginBottom: 25},
          ]}>
          Select User Type
        </Text>

        <View style={styles.buttonContainer}>
          <UserType
            title="Customer"
            image={require('../assets/placer.png')}
            color="#EAF0FE"
            onPress={() => navigation.navigate('Login')}
          />
          <UserType
            title="Admin"
            image={require('../assets/placer.png')}
            color="#E4F6FD"
          />
          <UserType
            title="Deliveryman"
            image={require('../assets/placer.png')}
            color="#F8F4D9"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    padding: 0,
    paddingTop: 75,
    height: windowHeight,
  },
  minor: {
    backgroundColor: '#f9fafd',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    marginBottom: 70,
    height: windowHeight,
  },
  logo: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
    marginBottom: 25,
  },
  text: {
    fontSize: 34,
    fontWeight: '500',
    fontFamily: 'inter',
    color: '#051d5f',
    marginBottom: 10,
  },
});

export default SelectType;
