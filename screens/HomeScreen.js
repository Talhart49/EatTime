import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../navigation/AuthProvider';

const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <Button onPress={() => logout()} title="Logout" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
