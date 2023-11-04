import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, input } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is an app!</Text>
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
