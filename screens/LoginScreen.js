import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button title="Click HERE" onPress={() => alert('Button clicked')} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});