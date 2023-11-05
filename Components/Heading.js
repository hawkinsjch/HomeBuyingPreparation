import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';



const Heading = () => {
  return(
    <View >
      <Image style={styles.logo} source={require("../assets/logo.png")}/>
      <Text style = {styles.heading}> Mortgage Calculator </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  logo:{
    
    height: 100,
    marginTop: 50,
    marginLeft: 30,
    width: 300,
    justifyContent: 'center',
    alignContent: 'center',
    position: 'relative',
    overflow: 'hidden'
    
  },

  heading:{
    fontSize: 40,
    justifyContent: 'center',
    marginLeft: 10,
    color: '#05304d'

  }
  
})

export default Heading