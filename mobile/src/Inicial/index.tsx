import React from "react";
import { useNavigation } from '@react-navigation/core';
import { Text, View, Image, ImageBackground } from "react-native";
import { BackgroundApp, LoginButton, GoToHome, Enter } from "./styles";

export default function Inicial() {
    const navigation = useNavigation();
    return (

        <BackgroundApp style={{backgroundColor: 'black'}}>
            
            <GoToHome onPress={() => navigation.navigate("Home")}>
                <Text 
                style={{color: 'grey', fontSize: 17, textAlign: 'center'}}> Home </Text>
            </GoToHome>           

        </BackgroundApp>
    )
}