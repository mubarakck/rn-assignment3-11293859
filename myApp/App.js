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

    <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <Image source={ require("./assets/more.png")}  style={styles.filterIcon} />
      </View>



      <Text style={styles.sectionTitle}>Categories</Text>



      <View style={styles.categories}>


      <View style={styles.category}>         
          <Text style={styles.categoryText}>Exercise</Text>
          <Text style={styles.categoryTaskCount}>12 Tasks</Text>
          <Image source={ require("./assets/img1.png")} style={styles.categoryImage} />
        </View>

        <View style={styles.category}>        
          <Text style={styles.categoryText}>Study</Text>
        <Text style={styles.categoryTaskCount}>12 Tasks</Text>
        <Image source={ require("./assets/img2.png")} style={styles.categoryImage} />
        </View>

        <View style={styles.category}>         
          <Text style={styles.categoryText}>Wash</Text>
          <Text style={styles.categoryTaskCount}>12 Tasks</Text>
          <Image source={ require("./assets/wash.png")} style={styles.categoryImage} />
        </View>

        <View style={styles.category}>         
          <Text style={styles.categoryText}>Exercise</Text>
          <Text style={styles.categoryTaskCount}>12 Tasks</Text>
          <Image source={ require("./assets/exercise.png")} style={styles.categoryImage} />
        </View>

        <View style={styles.category}>         
          <Text style={styles.categoryText}>Study</Text>
          <Text style={styles.categoryTaskCount}>12 Tasks</Text>
          <Image source={ require("./assets/study.png")} style={styles.categoryImage} />
        </View>

        <View style={styles.category}>         
          <Text style={styles.categoryText}>Code</Text>
          <Text style={styles.categoryTaskCount}>12 Tasks</Text>
          <Image source={ require("./assets/code.png")} style={styles.categoryImage} />
        </View>

        <View style={styles.category}>         
          <Text style={styles.categoryText}>Cook</Text>
          <Text style={styles.categoryTaskCount}>12 Tasks</Text>
          <Image source={ require("./assets/cook.png")} style={styles.categoryImage} />
        </View>

        <View style={styles.category}>         
          <Text style={styles.categoryText}>Dance</Text>
          <Text style={styles.categoryTaskCount}>12 Tasks</Text>
          <Image source={ require("./assets/dance.png")} style={styles.categoryImage} />
        </View>

        <View style={styles.category}>         
          <Text style={styles.categoryText}>Eat</Text>
          <Text style={styles.categoryTaskCount}>12 Tasks</Text>
          <Image source={ require("./assets/eat.png")} style={styles.categoryImage} />
        </View>

        
	        <View style={styles.category}>         
          <Text style={styles.categoryText}>Bath</Text>
          <Text style={styles.categoryTaskCount}>12 Tasks</Text>
          <Image source={ require("./assets/bath.png")} style={styles.categoryImage} />
        </View>

        

        </View>












































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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  filterIcon: {
    backgroundColor: '#FF6F00',
    padding: 10,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categories: {
    flexDirection: 'row',
  },
  category: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: '48%',
    marginRight: 30,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  
});
