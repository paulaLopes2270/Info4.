import React from "react";
import Input from "../components/Input";
import Button from "../components/Button"

import { View, Image } from "react-native";
import Style from "../styles/Style";




export default function Login({ navigation }) {
    return (
        <View style={Style.container}>
            <Image source={require(`../assets/Logo.png`)} style={Style.imgLogo}>
            </Image>
            <Input />
            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')} />
        </View>
    )
}