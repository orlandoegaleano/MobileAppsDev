import React, {useState} from "react";
import {Text, Button, View, StyleSheet, FlatList, Dimensions, TouchableOpacity, TextInput } from "react-native";
import TextDisplay from "../components/TextDisplay";


const TextScreen = () => {

    const [name, setName] = useState("");

    return (
        <View> 
                <Text>Enter Your Name Below</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize = "none"
                    autoCorrect={false}
                    value={name}
                    onChangeText={(newText) => {setName(newText);}}
                >
                </TextInput>             
                <Text>Your name is: {name}</Text>
                
                
        </View>
    )

}

const styles = StyleSheet.create({
    input: {
        margin: 20,
        borderColor: "black",
        borderWidth: 1,
    }
});

export default TextScreen