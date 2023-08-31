import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";




const ImageDetail = (props) => {
    console.log(props);
    console.log("This is getting hit");

    return (
        <View>
            <Image style={styles.image} source={props.imageSource}/>
            <Text>{props.title}</Text>
        </View>    
    );
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150
    }
});

export default ImageDetail