import React, {useState} from "react";
import {Text, Button, View, StyleSheet, FlatList, Dimensions, TouchableOpacity, TextInput } from "react-native";


const BoxScreen = () => {


    return (
        <View style = {styles.container}> 
                <Text style={styles.textOne}>Child 1</Text>
                <Text style={styles.textTwo}>Child 2</Text>        
                <Text style={styles.textThree}>Child 3</Text>                                   
        </View>
    )

}

const styles = StyleSheet.create({ 
    container: {
        margin: 20,
        borderColor: "black",
        borderWidth: 1,
        alignItems: "center",
        flexDirection: 'column',
        height: 200,
        justifyContent: "center",
        
    },
    text:{
        borderColor: "red",
        borderWidth: 1,          
    },
    textOne:{
        borderColor: "red",
        borderWidth: 1,
        //flex: 1,
        alignSelf: "flex-start",
    },
    textTwo:{
        borderColor: "red",
        borderWidth: 1,
        //flex: 2,
        position: "absolute",
        bottom: 10,   
    },
    textThree:{
        borderColor: "red",
        borderWidth: 1,
        //flex: 3,      
    },
});

export default BoxScreen