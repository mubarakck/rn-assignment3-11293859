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


      <View>
       <ScrollView horizontal={true} style={styles.categories} showsHorizontalScrollIndicator={false}>

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


        </ScrollView>

        </View>
        
        

        </View>

        <Text style={styles.sectionTitle}>Ongoing Task</Text>


        <View style={styles.ogtask}>
        <Text >Mobile App Development</Text>
        </View>


        <View style={styles.ogtask}>
        <Text >Web Development</Text>
        </View>


        <View style={styles.ogtask}>
        <Text >Push Ups</Text>
        </View>


        <View style={styles.ogtask}>
        <Text >Programming</Text>
        </View>


        <View style={styles.ogtask}>
        <Text >Mental Health</Text>
        </View>


        <View style={styles.ogtask}>
        <Text >Assignments</Text>
        </View>


        <View style={styles.ogtask}>
        <Text >Announcements</Text>
        </View>


        <View style={styles.ogtask}>
        <Text >Calculus</Text>
        </View>


        <View style={styles.ogtask}>
        <Text >Software Engineering</Text>
        </View>


        <View style={styles.ogtask}>
        <Text >Python Programming</Text>
        </View>


        <View style={styles.ogtask}>
        <Text >Java Programming</Text>
        </View>


        <View style={styles.ogtask}>
        <Text >Database Management</Text>
        </View>


        <View style={styles.ogtask}>
        <Text >Django Framework</Text>
        </View>


        <View style={styles.ogtask}>
        <Text >My SQL</Text>
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
    height:192,
    
    
  },
  category: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width:396,
    marginRight: 30,
    marginLeft: 20,
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
  ogtask: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
  },
  
});
