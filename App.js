import { StatusBar } from 'expo-status-bar';
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

function CreditDetermination (creditRating){
  switch(creditRating) {

    case BAD:
      return "Credit Rating is subpar, here are some resources to build credit. https://www.nerdwallet.com/article/finance/how-to-build-credit "
      break;
    case GOOD:
      return "Your credit score is satisfactory!"
      break;
  }
}

function LTVDetermination (loanValue){
  switch(loanValue){
  case GOOD:
    return "Your loan-to-value(LTV) % is satisfactory!";
    break;

  case MEDIUM:
    return "Your loan-to-value(LTV) % is a little above preferred LTV which will lead to a higher interest rate requiring a Private Mortgage Insurance which charges 1% of the home appraisal. For more information about PMI use this https://www.consumerfinance.gov/ask-cfpb/what-is-private-mortgage-insurance-en-122/.  Use this resource for strategies to save for a downpayment. https://www.53.com/content/fifth-third/en/financial-insights/personal/home-ownership/saving-strategies-first-home-down-payment.html"
    break;
  case BAD:
    return "Your loan-to-value(LTV) % is unsatisfactory. Consider using this resource to budget and save for a bigger downpayment https://www.53.com/content/fifth-third/en/financial-insights/personal/home-ownership/saving-strategies-first-home-down-payment.html "
    break;
  }
}
function MortgageDebtDetermination (totalDebtToIncome , totalMortgageDebt) {

    switch(totalMortgageDebt){

      case GOOD:
        return "Your Mortgage debt ratio is satisfactory!"
        break;
      
      case BAD:
        return "Your Mortgage debt ratio is unsatisfactory. Consider usng this resource that provide strategies to lower debt to income ratio. https://crosscountrymortgage.com/how-to-lower-debt-to-income-ratio/"


    }
}

function debtToIncomeDetemination (totalDebtToIncome){

  switch(totalDebtToIncome){

    case GOOD:
      return "Your total debt to income ratio is satisfactory!"
      break;

    case MEDIUM:
      return "Your total debt to income ratio is a little risky. Use this resource to find some better mortgage rates. https://themortgagereports.com/65972/the-best-mortgage-rates-lender-rankings#loan-purpose. Use this resource for some low interest credit cards to transfer debt to https://www.nerdwallet.com/best/credit-cards/low-interest."
    
    case BAD:
      return "Your total debt to income ratio is very risky. Use this resource to find some better mortgage rates. https://themortgagereports.com/65972/the-best-mortgage-rates-lender-rankings#loan-purpose. Use this resource for some low interest credit cards to transfer debt to https://www.nerdwallet.com/best/credit-cards/low-interest."
    }
  }


