import { StyleSheet,ScrollView, Button, TextInput, Image,  Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>







      <View style={styles.header}>
      <Text style={styles.greeting}>Hello, Devs</Text>
      <Image source={ require("./assets/person.png")}/>
    </View>


    <Text style={styles.taskCount}>56 tasks today</Text>

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
          <Text style={styles.categoryTaskCount}>3 Tasks</Text>
          <Image source={ require("./assets/img1.png")} style={styles.categoryImage} />
        </View>

        <View style={styles.category}>        
          <Text style={styles.categoryText}>Study</Text>
        <Text style={styles.categoryTaskCount}>1 Task</Text>
        <Image source={ require("./assets/img2.png")} style={styles.categoryImage} />
        </View>

        <View style={styles.category}>         
          <Text style={styles.categoryText}>Wash</Text>
          <Text style={styles.categoryTaskCount}>0 Tasks</Text>
          <Image source={ require("./assets/wash.png")} style={styles.categoryImage} />
        </View>

        <View style={styles.category}>         
          <Text style={styles.categoryText}>Exercise</Text>
          <Text style={styles.categoryTaskCount}>5 Tasks</Text>
          <Image source={ require("./assets/exercise.png")} style={styles.categoryImage} />
        </View>

        <View style={styles.category}>         
          <Text style={styles.categoryText}>Study</Text>
          <Text style={styles.categoryTaskCount}>8 Tasks</Text>
          <Image source={ require("./assets/study.png")} style={styles.categoryImage} />
        </View>

        <View style={styles.category}>         
          <Text style={styles.categoryText}>Code</Text>
          <Text style={styles.categoryTaskCount}>9 Tasks</Text>
          <Image source={ require("./assets/code.png")} style={styles.categoryImage} />
        </View>

        <View style={styles.category}>         
          <Text style={styles.categoryText}>Cook</Text>
          <Text style={styles.categoryTaskCount}>4 Tasks</Text>
          <Image source={ require("./assets/cook.png")} style={styles.categoryImage} />
        </View>

        <View style={styles.category}>         
          <Text style={styles.categoryText}>Dance</Text>
          <Text style={styles.categoryTaskCount}>3 Tasks</Text>
          <Image source={ require("./assets/dance.png")} style={styles.categoryImage} />
        </View>

        <View style={styles.category}>         
          <Text style={styles.categoryText}>Eat</Text>
          <Text style={styles.categoryTaskCount}>2 Tasks</Text>
          <Image source={ require("./assets/eat.png")} style={styles.categoryImage} />
        </View>

        
	        <View style={styles.category}>         
          <Text style={styles.categoryText}>Bath</Text>
          <Text style={styles.categoryTaskCount}>1 Task</Text>
          <Image source={ require("./assets/bath.png")} style={styles.categoryImage} />
        </View>


        </ScrollView>

        </View>
        
        

        </View>

        <Text style={styles.sectionTitle}>Ongoing Task</Text>

        
        <View style={styles.ogtask}>
        <Text style={styles.taskText}>Mobile App Development</Text>
        </View>


        <View style={styles.ogtask}>
        <Text style={styles.taskText}>Web Development</Text>
        </View>


        <View style={styles.ogtask}>
        <Text style={styles.taskText}>Push Ups</Text>
        </View>


        <View style={styles.ogtask}>
        <Text style={styles.taskText}>Programming</Text>
        </View>


        <View style={styles.ogtask}>
        <Text style={styles.taskText}>Mental Health</Text>
        </View>


        <View style={styles.ogtask}>
        <Text style={styles.taskText}>Assignments</Text>
        </View>


        <View style={styles.ogtask}>
        <Text style={styles.taskText}>Announcements</Text>
        </View>


        <View style={styles.ogtask}>
        <Text style={styles.taskText}>Calculus</Text>
        </View>


        <View style={styles.ogtask}>
        <Text style={styles.taskText}>Software Engineering</Text>
        </View>


        <View style={styles.ogtask}>
        <Text style={styles.taskText}>Python Programming</Text>
        </View>


        <View style={styles.ogtask}>
        <Text style={styles.taskText}>Java Programming</Text>
        </View>


        <View style={styles.ogtask}>
        <Text style={styles.taskText}>Database Management</Text>
        </View>


        <View style={styles.ogtask}>
        <Text style={styles.taskText}>Django Framework</Text>
        </View>


        <View style={styles.ogtask}>
        <Text style={styles.taskText}>My SQL</Text>
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
    marginRight: 145,
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
    height:49,
    width: 353,
  },
  filterIcon: {
    backgroundColor: '#FF6F00',
    padding: 10,
    borderRadius: 10,
  },
 
  categories: {
    flexDirection: 'row',
    height:192,
    width: 396,    
  },
  category: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width:222,
    marginRight: 30,
    
    marginBottom:20,
    height:192,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 0,
    marginRight: 120,
  },
  categoryTaskCount:{
    marginRight: 140,
    color: '#888',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  ogtask: {
    backgroundColor: '#FBF9F7',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    height: 128,
    width: 354,
    borderRadius: 15,
    marginRight: 10,
    marginLeft: 10,
  },
  taskText: {    
    top: 20,
    fontSize: 19,
      }
  
});
