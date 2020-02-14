import React, {memo} from 'react';
import {ActivityIndicator} from 'react-native';
import firebase from '../../firebase';
import 'firebase/auth';
import Background from '../components/Background';
import {theme} from '../core/theme';

const AuthLoadingScreen = ({navigation}) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is logged in
      navigate('App');
    } else {
      // User is not logged in
      navigate('OnBoard');
    }
  });

  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  );
};

export default memo(AuthLoadingScreen);