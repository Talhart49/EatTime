import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput, Avatar} from 'react-native-paper';
import React from 'react';

const PersonalinfoScreen = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [number, setNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <Avatar.Image
        source={require('../assets/placer.png')}
        size={99}
        style={styles.img}
      />
      <View style={styles.input}>
        <TextInput
          value={firstName}
          onChangeText={setFirstName}
          mode="outlined"
          label="First Name"
          placeholder="First Name"
          theme={{
            colors: {
              primary: '#007EFF',
              underlineColor: 'transparent',
              background: '#fff',
            },
          }}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          value={lastName}
          onChangeText={setLastName}
          mode="outlined"
          label="Last Name"
          placeholder="Last Name"
          theme={{
            colors: {
              primary: '#007EFF',
              underlineColor: 'transparent',
              background: '#fff',
            },
          }}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          value={number}
          onChangeText={setNumber}
          mode="outlined"
          label="Contact Number"
          placeholder="Contact Number"
          theme={{
            colors: {
              primary: '#007EFF',
              underlineColor: 'transparent',
              background: '#fff',
            },
          }}
        />
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PersonalinfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  img: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    marginTop: 10,
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#007eef',
    padding: 10,
    borderRadius: 50,
  },
  txt: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
