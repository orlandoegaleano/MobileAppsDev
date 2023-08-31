import React from "react";
import { Text, View, StyleSheet, } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <Text>Brunch Menu</Text>
            <ImageDetail title="Doughnut" price="1.50" imageSource={require('../../assets/doughnut.jpeg')}/>
            <ImageDetail title="Breakfast Sandwhich" price="5.50" imageSource={require('../../assets/sandwhich.jpeg')}/>
            <ImageDetail title="Coffee" price="3.50" imageSource={require('../../assets/coffee.jpeg')}/>
        </View>
    );
}


const styles = StyleSheet.create({});

export default ImageScreen