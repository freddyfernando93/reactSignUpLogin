import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import Colors from "../constants/Colors";

function UserItem(props) {
    return (
        <TouchableOpacity onPress={() => null } style={styles.container}
        >
            <Image
                style={styles.image}
                source={{uri: props.user.avatar}}
            />
            <Text style={styles.emailText}>{props.user.email}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        shadowColor: "rgba(0, 0, 0, 0.35)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
        height: 80,
        padding: 10,
        elevation: 3
    },
    image: {
        borderColor: Colors.tintColor,
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 2,
        marginRight: 15
    },
    emailText: {
        fontWeight: 'bold',
        color: 'black'
    }
});


export default UserItem;
