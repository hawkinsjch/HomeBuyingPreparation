import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import Constants from 'expo-constants';

import Heading from './Components/Heading'
import Information from './Components/Information'




// You can import from local files
const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 
// or any pure javascript modules available in npm



/*
cd AwesomeProject
npm install expo
npm i react-native-chart-kit
npx expo start

plug into terminal^^
*/




const App = () => {
  return (
    <View style = {styles.container}>
    <ImageBackground source={require('./assets/background4.jpg')} resizeMode='cover' style = {styles.image}>
       <Heading/>
       <Information/>
     </ImageBackground>
     </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F',
    
  },
  image: {
    justifyContent: 'center',
    height: screenHeight,
    width: screenWidth,
    
    

    
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    height: 100,
    width: 100,
  
}});

export default App


