import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>Please Login></Text>
                <Button title="Switch To Login"/>
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder="Your E-Mail Address"/>
                    <DefaultInput placeholder="Password"/>
                    <DefaultInput placeholder="Confirm Password"/>
                </View>
                <Button title="Login" onPress={this.loginHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }, 
    inputContainer : {
        width: "80%"
    },
})

export default AuthScreen;