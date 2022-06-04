import React, {createContext, useEffect} from 'react';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = React.useState(null);

  // useEffect(() => {
  //   let unmounted = false;
  //   setTimeout(() => {
  //     if (!unmounted) {
  //       firestore()
  //         .collection('users')
  //         .add({
  //           name: name,
  //           email: email,
  //         })
  //         .then(() => {
  //           console.log('User added!');
  //         });
  //     }
  //   }, 3000);
  //   return () => {
  //     unmounted = true;
  //   };
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (error) {
            console.log(error);
          }
        },
        googleLogin: async () => {
          try {
            const {idToken} = await GoogleSignin.signIn();
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
          } catch (error) {
            console.log(error);
          }
        },
        register: async (name, email, password) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {});
            console.log(`User created : ${name}`);
          } catch (error) {
            console.log(error);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (error) {
            console.log(error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
