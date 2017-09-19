import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC9Z5Iw6XKuc2Z1UvSDzoX0CN2pB_wER8I',
      authDomain: 'auth-fc113.firebaseapp.com',
      databaseURL: 'https://auth-fc113.firebaseio.com',
      projectId: 'auth-fc113',
      storageBucket: 'auth-fc113.appspot.com',
      messagingSenderId: '181643612245'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
