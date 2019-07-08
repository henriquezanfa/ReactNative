import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LogForm from './components/LoginForm'

class App extends Component {

    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBDyq9dys0a1tG2x84EzGiLtpQxVPoHRnU',
            authDomain: 'auth-2ee45.firebaseapp.com',
            databaseURL: 'https://auth-2ee45.firebaseio.com',
            projectId: 'auth-2ee45',
            storageBucket: '',
            messagingSenderId: '159221081905',
            appId: '1:159221081905:web:53c8e69c05cb8a86'
        })
    }

    render() {
        return (
            <View>
                <Header headerText="Auth" />
                <LogForm />
            </View>
        )
    }
}

export default App;