import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, TextInput, Image,  Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.greeting}>Hello, Devs</Text>
      <Text style={styles.taskCount}>14 tasks today</Text>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8;   ',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
