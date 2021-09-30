import React from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Style from "../styles/Style";
// import Style from "../styles/Style";

const Button = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={Style.button}>
            <Text>Entrar</Text>
        </TouchableOpacity>
    )
}

export default Button