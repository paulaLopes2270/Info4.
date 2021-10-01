import React from 'react';
import { useState } from "react";
import { TextInput, View, Text, KeyboardAvoidingView, KeyboardAvoidingViewComponent, ScrollView, ScrollViewBase, ScrollViewComponent, _ScrollView, } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import Style from "../styles/Style";


export default function () {

    const [login, setLogin] = useState(null);
    const [senha, setSenha] = useState(null);
    const [isSelected, setSelected] = useState(false);

    return (
        <KeyboardAvoidingView >


        <View>
            <TextInput style={Style.input} value={login} placeholder="Login:" placeholderTextColor="black"
                onChangeText={value => setLogin(value)}
                keyboardType={"email-address"} />

            <TextInput style={Style.input} value={senha} placeholder="Senha:" placeholderTextColor="black" />




            <View style={Style.checkboxContainer}  >
                <CheckBox
                    boxType='circle'
                    value={isSelected}
                    onValueChange={setSelected}
                    checkedIcon="check"
                    uncheckedIcon="squere-o"
                    checked={isSelected}
                    onPress={() => setSelected(!isSelected)}
                />
                <Text>Manter Conectado</Text>

            </View>
            </View>

            </KeyboardAvoidingView>

            )
}