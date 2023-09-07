import React, { useState } from "react";
import {Text, Button, View, StyleSheet, FlatList, Dimensions, TouchableWithoutFeedback } from "react-native";
import ColorCounter from "../components/ColorCounter";

const ColorAdjusterScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    let colorString = `rgb(${red}, ${green}, ${blue})`;

   return( 
        <View>

            

            <Text>Color Adjuster Screen</Text>
            
            <ColorCounter color="Red"
            onIncrease={() => {setRed(red + 25); console.log("Red Increased")}}
            onDecrease={() => {setRed(red - 25); console.log("Red Decreased")}}
            />
           
            <ColorCounter color="Green"
            onIncrease={() => {setGreen(green + 25)}}
            onDecrease={() => {setGreen(green - 25)}}
            />

            <ColorCounter color="Blue"
            onIncrease={() => {setBlue(blue + 25)}}
            onDecrease={() => {setBlue(blue - 25)}}
            />

            <View style = {{height: 100, width: 100, backgroundColor: colorString}}>

            </View>

        </View>
    )

}

const style = StyleSheet.create({

});

export default ColorAdjusterScreen