import React, { useState } from "react";
import {Text, Button, View, StyleSheet, FlatList, Dimensions } from "react-native";


 //Using Dimensions to get the screen dimesions of the device being used in order to determine how many columns can be displayed.
 const screenWidth = Dimensions.get('window').width;
 const itemWidth = 100; // or whatever your item width is
 const itemMargin = 10; // margin for your items
 const itemsPerRow = Math.floor(screenWidth / (itemWidth + itemMargin * 2));

const ColorScreen = () => {

   
   
    const [colors, setColors] = useState([]);
    console.log(colors);

    return (
    <View style={styles.container}>

        <Button title="Add color" onPress={()=>{

            //creating a new array that contains the elements from the old 'colors' array using '...'
            //then adding the new array of random colors to the new 'colors' array
            setColors([...colors, randomRgb()])
        }}/>

        <View>     
            <FlatList                
                data={colors}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <View style={[styles.colorBox, {backgroundColor: item}]}>
                    </View>                  
                )}
                numColumns={itemsPerRow} 
            />
        </View>

    </View>  
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    let colorString = `rgb(${red}, ${green}, ${blue})`;

    return colorString;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(0,0,0)',
    },
    colorBox: {
        width: itemWidth,
        height: 100,
        margin: itemMargin,      

    },
});

export default ColorScreen