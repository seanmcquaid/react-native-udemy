import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import startMainTabs from '../MainTabs/startMainTabs';
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import image from "../../assets/beautiful-place.jpg";

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render () {
        return (
            <ImageBackground source={image} style={styles.backgroundImage}>
                <View style={styles.container}>
                        <MainText>
                            <HeadingText>Please Login></HeadingText>
                        </MainText>
                        <ButtonWithBackground color="#29aaf4" onPress={() => alert("hello")}>Switch to Login</ButtonWithBackground>
                        <View style={styles.inputContainer}>
                            <DefaultInput placeholder="Your E-Mail Address" style={styles.input}/>
                            <DefaultInput placeholder="Password" style={styles.input}/>
                            <DefaultInput placeholder="Confirm Password" style={styles.input}/>
                        </View>
                        <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>Submit</ButtonWithBackground>
                </View>
            </ImageBackground>
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
    input : {
        backgroundColor : "#eee",
        borderColor : "#bbb"
    },
    backgroundImage :{
        width : "100%",
        flex : 1
    }
})

export default AuthScreen;