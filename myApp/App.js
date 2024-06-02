import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, TextInput, Image,  Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>







      <View style={styles.header}>
      <Text style={styles.greeting}>Hello, Devs</Text>
      <Image source={ require("./assets/person.png")}/>
    </View>


    <Text style={styles.taskCount}>14 tasks today</Text>


















































    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F5EDE3',
    padding: 20, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 16,
    color: '#888',
  },
  
});
