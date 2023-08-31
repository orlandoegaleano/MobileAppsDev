import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";




const ImageDetail = (props) => {
    console.log(props);
    console.log("This is getting hit");

    return (
        <View>
            <Image style={styles.circleImage} source={props.imageSource}/>
            <Text>{props.title}</Text>
            <Text>{props.price}</Text>
        </View>    
    );
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
    },
    circleImage: {
        width: 100,  // or the desired diameter of your circle
        height: 100, // same as the width
        borderRadius: 50,  // half the width and height
      }
});

export default ImageDetail