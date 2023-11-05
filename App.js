import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, input } from 'react-native';
import ApprovalFactors from "./approvalFactors";
import Papa from 'papaparse';
import csvFile from './data/data.csv'


const TEST_CREDIT_RATING = 700,
      TEST_DOWN_PAYMENT = 50,
      TEST_HOME_APPRAISAL = 1000,
      TEST_GROSS_INCOME = 100,
      TEST_CAR_PAYMENT = 0, 
      TEST_CREDIT_CARD_PAYMENT = 0, 
      TEST_MORTGAGE = 30, 
      TEST_STUDENT_LOANS = 0;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ParseCSV()}</Text>
      <Text>Credit Rating: {TEST_CREDIT_RATING}</Text>
      <Text>Credit Rating Valid: {CodeToText(ApprovalFactors.IsCreditValid(TEST_CREDIT_RATING))}</Text>
      <Text>LTV: {CodeToText(ApprovalFactors.LTV(TEST_DOWN_PAYMENT, TEST_HOME_APPRAISAL))}</Text>
      <Text>DTI: {CodeToText(ApprovalFactors.DTI(TEST_GROSS_INCOME, TEST_CAR_PAYMENT, TEST_CREDIT_CARD_PAYMENT, TEST_MORTGAGE, TEST_STUDENT_LOANS))}</Text>
      <StatusBar style="auto" />
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

function ParseCSV(){
  Papa.parse(csvFile, {
    download: true,
    complete: function (input) {
         const records = input.data;
         return input.data;
    }
});

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
