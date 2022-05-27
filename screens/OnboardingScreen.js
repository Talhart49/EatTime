import {View, Text, Button, StyleSheet, Image} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              style={styles.img}
              source={require('../assets/cucumber-sandwich.jpg')}
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper1',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image
              style={styles.img}
              source={require('../assets/cucumber-sandwich.jpg')}
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper2',
        },
        {
          backgroundColor: '#e9bcbe',
          image: (
            <Image
              style={styles.img}
              source={require('../assets/cucumber-sandwich.jpg')}
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper3',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 200,
    width: 200,
  },
});
