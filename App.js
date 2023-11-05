import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, input } from 'react-native';
import ApprovalFactors from "./approvalFactors";

const TEST_CREDIT_RATING = 700;
const TEST_DOWN_PAYMENT = 100;
const TEST_HOME_APPRAISAL = 1000;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Credit Rating: {TEST_CREDIT_RATING}</Text>
      <Text>Credit Rating Valid: {ApprovalFactors.IsCreditValid(TEST_CREDIT_RATING).toString()}</Text>
      <Text>LTV: {ApprovalFactors.LTV(TEST_DOWN_PAYMENT, TEST_HOME_APPRAISAL).toString()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
