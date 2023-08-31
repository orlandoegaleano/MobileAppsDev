import React from "react";
import { Text, View, StyleSheet, } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <Text>Image Screen</Text>
            <ImageDetail title="Doughnut" imageSource={require('../../assets/doughnut.jpeg')}/>
            <ImageDetail title="Sandwhich" imageSource={require('../../assets/sandwhich.jpeg')}/>
            <ImageDetail title="Coffee" imageSource={require('../../assets/coffee.jpeg')}/>
        </View>
    );
}


const styles = StyleSheet.create({});

export default ImageScreen