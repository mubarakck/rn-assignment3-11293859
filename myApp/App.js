import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, TextInput, Image,  Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your Apps!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8D1BA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
