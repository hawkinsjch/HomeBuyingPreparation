import { StatusBar } from 'expo-status-bar';
<<<<<<< Updated upstream
import { StyleSheet, Text, View } from 'react-native';
import ApprovalFactors from "./approvalFactors";

=======
import { StyleSheet, Text, View, input, Dimensions, ImageBackground} from 'react-native';
import ApprovalFactors from "./approvalFactors";
import Heading from './Components/Heading';
import Information from './Components/Information';
/*
cd AwesomeProject
npm install expo
npm i react-native-chart-kit
npx expo start

plug into terminal^^
*/

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 
>>>>>>> Stashed changes
const TEST_CREDIT_RATING = 700,
      TEST_DOWN_PAYMENT = 50,
      TEST_HOME_APPRAISAL = 1000,
      TEST_GROSS_INCOME = 100,
      TEST_CAR_PAYMENT = 0, 
      TEST_CREDIT_CARD_PAYMENT = 0, 
      TEST_MORTGAGE = 30, 
      TEST_STUDENT_LOANS = 0;

<<<<<<< Updated upstream
=======
      
>>>>>>> Stashed changes
export default function App() {
  return (
    
      <View style = {styles.container}>
      <ImageBackground source={require('./assets/background.jpg')} resizeMode='cover' style = {styles.image}>
         <Heading/>
         <Information/>
       </ImageBackground>
       </View>
  
  );
}

function CodeToText(num) {
  switch(num) {
    case 0:
      return "Good"
    case 1:
      return "Bad"
    case 2:
      return "Medium"
  }
}

<<<<<<< Updated upstream
=======
function callBack(data){

  console.log(data);

}




>>>>>>> Stashed changes


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
