import React, {useState, updateState} from 'react';
import {Text, Input, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, Button, Dimensions} from 'react-native';
import { Linking } from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
const data = {
  labels: ["Income", "$Credit", "$Car", "Loans", "Appraised", "Down Payment", "Loan Amount", "Mortgage", "CreditScore"],
  datasets: [
    {
      data: [4000, 450, 10000, 200000, 200000, 3000]
    }
  ]
};





const screenWidth = Dimensions.get('window').width; 
const chartConfig = {
  backgroundGradientFrom: "#000000",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#000000",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 1,
  useShadowColorFromDataset: false // optional
};

const CREDIT_MINIMUM = 640;

const GOOD = 0
const BAD = 1
const MEDIUM = 2



const Information = ({navigation}) =>{
  const [GrossIncome, setGrossIncome] = useState("")
  const [CreditCard, setCreditCard] = useState("")
  const [CarPayment, setCarPayment] = useState("")
  const [StudentLoans, setStudentLoans] = useState("")
  const [AppraisedValue, setAppraisedValue] = useState("")
  const [DownPayment, setDownPayment] = useState("")
  const [LoanAmount, setLoanAmount] = useState("")
  const [MortgagePayment, setMortgagePayment] = useState("")
  const [CreditScore, setCreditScore] = useState("")
  const [Creditdeterm, setCreditdeterm] = useState("")
  const [Ltv, setltv] = useState("")
  const [MDD, setMDD] = useState("")
  const [DTID, setDTID] = useState("")
  

  return(
    <ScrollView ref={scrollView => this.scrollView = scrollView}   automaticallyAdjustKeyboardInsets = {true} style = {styles.scroll}>
    <View style = {styles.wrapper}>
      <TextInput onChangeText={setGrossIncome} value = {GrossIncome}
 type={'number'}  placeholder='Gross Income' placeholderTextColor='black' style= {styles.textBox}/>
      <TextInput onChangeText={setCreditCard} value = {CreditCard}
 type={'number'} placeholder='Credit Card Payment' placeholderTextColor='black' style= {styles.textBox}/>
      <TextInput onChangeText={setCarPayment} value = {CarPayment}
 type={'number'} placeholder='Car Payment' placeholderTextColor='black' style= {styles.textBox}/>
      <TextInput onChangeText={setStudentLoans} value = {StudentLoans}
 type={'number'} placeholder='Student Loans' placeholderTextColor='black' style= {styles.textBox}/>
      <TextInput onChangeText={setAppraisedValue} value = {AppraisedValue}
 type={'number'} placeholder='Appraised Value' placeholderTextColor='black' style= {styles.textBox}/>
      <TextInput onChangeText={setDownPayment} value = {DownPayment}
 type={'number'} placeholder='Down Payment' placeholderTextColor='black' style= {styles.textBox}/>
      <TextInput onChangeText={setLoanAmount} value = {LoanAmount}
 type={'number'} placeholder='Loan Amount' placeholderTextColor='black' style= {styles.textBox}/>
      <TextInput onChangeText={setMortgagePayment} value = {MortgagePayment}
 type={'number'} placeholder='Mortgage Payment' placeholderTextColor='black' style= {styles.textBox}/>
      <TextInput onChangeText={setCreditScore} value = {CreditScore}
 type={'number'} placeholder='Credit Score' placeholderTextColor='black' style= {styles.textBox}/>

    
       
    </View>
    <View>
    <Button title="Submit" color = '#000000' style = {styles.button} onPress={() => {this.scrollView.scrollTo(yAxisLabel = 660)}}></Button>
    </View>

    <BarChart
  style={styles.graphStyle}
  data={data}
  width={330}
  height={550}
  yAxisLabel=""
  chartConfig={chartConfig}
  verticalLabelRotation={90}
/>


      <View style = {styles.bots}>

      <Text onPress={() => Linking.openURL('https://www.nerdwallet.com/article/finance/raise-credit-score-fast')} style = {styles.botText}>{CreditDetermination(IsCreditValid(CreditScore))}</Text>
      
      
      <Text onPress={() => Linking.openURL('https://www.53.com/content/fifth-third/en/financial-insights/personal/home-ownership/saving-strategies-first-home-down-payment.html')} style={styles.botText}>{LTVDetermination(LTV(DownPayment, AppraisedValue))}</Text>
      <Text onPress={() => Linking.openURL('https://crosscountrymortgage.com/how-to-lower-debt-to-income-ratio/')} style={styles.botText}>{MortgageDebtDetermination(CreditCard, DTI(GrossIncome, CarPayment, CreditCard, MortgagePayment, StudentLoans))}</Text>
      
      <Text onPress={() => Linking.openURL('https://themortgagereports.com/65972/the-best-mortgage-rates-lender-rankings#loan-purpose')} style={styles.botText}>{DebtToIncomeDetemination(DTI(GrossIncome, CarPayment, CreditCard, MortgagePayment, StudentLoans))}</Text>
       </View>
    </ScrollView>
   
  
  )
}


function IsCreditValid(creditRating) {

    if(creditRating >= CREDIT_MINIMUM){
        return 0
    }
    else{
        return 1;
    }
  
  }


function LTV(downPayment , houseAppraisalValue) {

    loanValue  = (1 - (downPayment/houseAppraisalValue));


    if(loanValue <= .80) {
        return 0;
    }
    else if(loanValue <= .95){
        pmiHouseValueAdded = houseAppraisalValue + (houseAppraisalValue*.01)
        return 2;
    }else if (loanValue <= 1.0){
        pmiHouseValueAdded = houseAppraisalValue + (houseAppraisalValue*.01)
        return 1;
    }
    else {
        return 1;
    }


  }



  
function DTI(grossIncome, carPayment , creditCardPayment , mortgage, studentLoans) {

    totalDebtToIncome = ((carPayment + creditCardPayment + mortgage + studentLoans)/grossIncome);

    totalMortgageDebt = mortgage / grossIncome;

    if(totalMortgageDebt >= .28) {
        return 1;
    }
    else if(totalDebtToIncome <= .36){
        return 0;
    }
    else if (totalDebtToIncome <= .43){
        return 2;
    }
    else{
        return 1;
    }

}





function CodeToText(num) {
  switch(num) {
    case 0:
      return "GOOD"
    case 1:
      return "BAD"
    case 2:
      return "MEDIUM"
  }
}

function CreditDetermination (creditRating){
  switch(creditRating) {

    case 1:
      return "Credit Rating could use some work. Click on Me for some resources! "
      break;
    case 0:
      return "Your credit score is satisfactory!"
      break;
  }
}

function LTVDetermination (loanValue){
  switch(loanValue){
  case 0:
    return "Your loan-to-value(LTV) % is satisfactory!";
    break;

  case 2:
    return "Your loan-to-value(LTV) % is a little above preferred LTV which will lead to a higher interest rate requiring a Private Mortgage Insurance which charges 1% of the home appraisal. For resources to budget and save for a bigger down payment click me!"
    break;
  case 1:
    return "Your loan-to-value(LTV) % is unsatisfactory. Consider clicking me to learn how to budget and save for a bigger downpayment!" 
    break;
  }
}
function MortgageDebtDetermination (totalDebtToIncome, totalMortgageDebt) {

    switch(totalMortgageDebt){

      case 0:
        return "Your Mortgage debt ratio is satisfactory!"
        break;
      
      case 1:
        return "Your Mortgage debt ratio is unsatisfactory. Consider clicking me for resources that provide strategies to lower debt to income ratio." 
    }
}

function DebtToIncomeDetemination (totalDebtToIncome){

  switch(totalDebtToIncome){

    case 0:
      return "Your total debt to income ratio is satisfactory!"
      break;

    case 2:
      return "Your total debt to income ratio is a little risky. Click me to get resources to find better mortgage rates or consider transfering debt to a low income credit card!."
    
    case 1:
      return "Your total debt to income ratio is very risky. Click me to find some better mortgage rates around you."
    }
  }

const styles = StyleSheet.create({
  textBox: {
    backgroundColor: '#FFFFFF' ,
    paddingBottom: 30,
    marginTop: 30,
    width: '40%',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 15,
    overflow: 'hidden',
    alignItems: 'center'
    

  },

  wrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'

  },

  button: {
    justifyContent: 'center',
    marginTop: 20,
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    position: 'relative',
    marginLeft: 185,
    fontSize: 40,
    width: '50%',

  },

  

  graphStyle: {
    justifyContent: 'center',
    marginTop: 200,
    alignContent: 'center',
    paddingBottom: 100,
    marginLeft: 32
    


  },

  botText: {
    justifyContent: 'center',
    width: '75%',
    alignContent: 'center',
    position: 'relative',
    marginLeft: 0,
    fontSize: 20,
    color: '#000000',
    backgroundColor: '#FFFFFF',
    marginBottom: 40,
    padding: 10,
    fontFamily: 'sans-serif',
    overflow: 'hidden',
    borderWidth: 2,
    borderRadius: 12,
    
  },

  bots: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'

  }
    
    
})

export default Information



/*
cd AwesomeProject
npm install expo
npm i react-native-chart-kit
npx expo start

plug into terminal^^
*/