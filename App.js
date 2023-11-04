import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, input } from 'react-native';

const TEST_CREDIT_RATING = 600;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Credit Rating: {TEST_CREDIT_RATING}</Text>
      <Text>Credit Rating Valid: </Text>
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
