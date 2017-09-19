import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC9Z5Iw6XKuc2Z1UvSDzoX0CN2pB_wER8I',
      authDomain: 'auth-fc113.firebaseapp.com',
      databaseURL: 'https://auth-fc113.firebaseio.com',
      projectId: 'auth-fc113',
      storageBucket: 'auth-fc113.appspot.com',
      messagingSenderId: '181643612245'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ height: 45 }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <Spinner size='large' />
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
