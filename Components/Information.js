import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, Button, Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

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
  const data = {
  labels: ["Gross Income", "Credit Card", "Car Payment", "Student Loans", "Appraised Value", "Down Payment", "Loan Amount", "Mortgage Payment", "Credit Score"],
  datasets: [
    {
      data: [2003, 454, 282, 801, 991, 434, 434, 545, 848]
    }
  ]
};

  return(
    <ScrollView ref={scrollView => this.scrollView = scrollView}   automaticallyAdjustKeyboardInsets = {true} style = {styles.scroll}>
    <View style = {styles.wrapper}>
      <TextInput placeholder='Gross Income' placeholderTextColor='black' style= {styles.textBox}/>
      <TextInput placeholder='Credit Card Payment' placeholderTextColor='black' style= {styles.textBox}/>
      <TextInput placeholder='Car Payment' placeholderTextColor='black' style= {styles.textBox}/>
      <TextInput placeholder='Student Loans' placeholderTextColor='black' style= {styles.textBox}/>
      <TextInput placeholder='Appraised Value' placeholderTextColor='black' style= {styles.textBox}/>
      <TextInput placeholder='Down Payment' placeholderTextColor='black' style= {styles.textBox}/>
      <TextInput placeholder='Loan Amount' placeholderTextColor='black' style= {styles.textBox}/>
      <TextInput placeholder='Mortgage Payment' placeholderTextColor='black' style= {styles.textBox}/>
      <TextInput placeholder='Credit Score' placeholderTextColor='black' style= {styles.textBox}/>

      
       
    </View>
    <View>
    <Button title="Submit" color= '#000000' onPress={() => {this.scrollView.scrollToEnd()}}></Button>
    </View>

    <BarChart
    style={styles.graphStyle}
    data={data}
    width={screenWidth}
    height={300}
    yAxisLabel="$"
    
    chartConfig={chartConfig}
    verticalLabelRotation={20}
/>
      <Text style={styles.botText}>You need to build your credit more before you can buy this house!</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  textBox: {
    backgroundColor: '#b5b5b5' ,
    paddingBottom: 30,
    marginTop: 30,
    width: '40%',
    borderRadius: 10,
    margin: 5,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
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
    position: 'relative',
    marginLeft: 185,
    fontSize: 40,

  },

  graphStyle: {
    justifyContent: 'center',
    marginTop: 200,
    alignContent: 'center',
    paddingBottom: 100,
    


  },

  botText: {
    paddingBottom: 200,
    justifyContent: 'center',
    width: '50%',
    alignContent: 'center',
    position: 'relative',
    marginLeft: 100,
    fontSize: 20,
  }


    
    
})



export default Information