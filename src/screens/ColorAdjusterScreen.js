import React, { useState, useReducer } from "react";
import {Text, Button, View, StyleSheet, FlatList, Dimensions, TouchableWithoutFeedback } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 55;

const reducer = (state, action) => {
    //state looks like: {red: number, green: number, blue: number}
    //action looks like: {type: "red" || "green" || "blue" , payload: 20 || -20}

    //ENDED HERE before getting to define type during lecture
    
    switch(action.type){
        case 'red':
            if(state.red + action.payload < 0 || state.red + action.payload > 255){
                return state
            }
            return {...state, red: state.red + action.payload};
        case 'green':
            if(state.green + action.payload < 0 || state.green + action.payload > 255){
                return state
            }
            return{...state, green: state.green + action.payload};
        case 'blue':
            if(state.blue + action.payload < 0 || state.blue + action.payload > 255){
                return state
            }
            return{...state, blue: state.blue + action.payload};
        default:
            return state;
    }
}



const ColorAdjusterScreen = () => {
    //first is a reducer function we will define, second piece is the state data
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

    const {red, green, blue} = state;
    const colorString = `rgb(${red}, ${green}, ${blue})`;

    return( 
        <View>           

            <Text>Color Adjuster Screen</Text>
            
            <ColorCounter color="Red"
            onIncrease={() => {dispatch({type: "red", payload: COLOR_INCREMENT});}}
            onDecrease={() => {dispatch({type: "red", payload: -1 * COLOR_INCREMENT});}}
            />
           
            <ColorCounter color="Green"
            onIncrease={() => {dispatch({type: "green", payload: COLOR_INCREMENT});}}
            onDecrease={() => {dispatch({type: "green", payload: -1 * COLOR_INCREMENT});}}
            />

            <ColorCounter color="Blue"
            onIncrease={() => {dispatch({type: "blue", payload: COLOR_INCREMENT});}}
            onDecrease={() => {dispatch({type: "blue", payload: -1 * COLOR_INCREMENT});}}
            />

            <View style = {{height: 100, width: 100, backgroundColor: colorString}}>

            </View>

        </View>
    )

}

const style = StyleSheet.create({

});

export default ColorAdjusterScreen