import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, input } from 'react-native';
import { IsCreditValid, LTV } from "./approvalFactors";

const TEST_CREDIT_RATING = 700;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Credit Rating: {TEST_CREDIT_RATING}</Text>
      <Text>Credit Rating Valid: {IsCreditValid(TEST_CREDIT_RATING).toString()}</Text>
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
