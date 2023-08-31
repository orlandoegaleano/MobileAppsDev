import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  //console.log(props);

  return <View>

        <Text style={styles.text}>
          Navigation Page {'\n'}
        </Text>   
        <Text style={styles.smallerText}>
          Orlando Mobile Dev Class App         
        </Text>


        <Button
        onPress={() => {navigation.navigate("Components"); console.log("The Button component has been pressed")}} 
        title="Components Screen"         
        />
        

        {/* <TouchableOpacity onPress={() => {navigation.navigate("List"); console.log("Now the TouchableOpacity component has been pressed!")}}>
          <Text>ListScreen</Text>
        </TouchableOpacity> */}

        <Button
        onPress = {() => {navigation.navigate("List")}}
        title="List Screen"
        />

        <Button
        onPress={() => {navigation.navigate("Image")}}
        title="Image Screen"
        />

      </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#fff',
  },
  smallerText: {
    fontSize: 25,
  },
});

export default HomeScreen;
