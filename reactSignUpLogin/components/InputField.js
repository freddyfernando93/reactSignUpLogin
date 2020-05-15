import React from 'react';
import {AntDesign} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import {Text, TextInput, View, StyleSheet} from "react-native";

function InputField(props) {
    return (
        <View>
            <Text style={{color: 'white', paddingBottom: 5}}>
                {props.placeholder}
            </Text>
            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.numberInput}
                    // placeholder={props.placeholder}
                    placeholderTextColor="white"
                    secureTextEntry={props.secureTextEntry}
                    onFocus={() => props.onFocus()}
                    onBlur={() => props.onBlur()}
                    // value="abc"
                    onChangeText={props.onChangeText}
                    defaultValue={props.defaultValue}
                    // keyboardType={'email-address'}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', alignItems: 'center'
    },
    numberInput: {
        width: '100%',
        color: 'rgba(255,255,255, 0.5)',
        borderBottomWidth: 0.5,
        borderColor: 'rgba(255,255,255, 0.5)',
        paddingVertical: 10
    },
});

export default InputField;
