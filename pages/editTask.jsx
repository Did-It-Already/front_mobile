import { useState, useContext, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";

import { View, Text,ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


import MyContext from '../context.js';

import Header from "../components/Header.jsx";

import goBackIcon from "../assets/icons/goBackIcon.png";

import { accessToken } from "../assets/functions.js";

import { API } from "../assets/constants.js";

import styles from "../assets/styles.js";

function EditTask({ route }) {
    const {theme, setCurrentTasks,currentTasks} = useContext(MyContext);
    const navigation = useNavigation();
    const { slug } = route.params;

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date("2023-10-10"));
    const [task, setTask] = useState({});

    const setNewDate = (event, date) => {
      setDate(date)
    };

    useEffect(async ()=>{
      const query = `
      query {
        taskById(task_id:"${slug}"){
            name
            description
            date
            is_done
        }
    }
    `;
      fetch(API, {
          method: 'POST',
          mode: "cors",
          headers: {
              'Content-Type': 'application/json',
              "Authorization": "Bearer " + await accessToken(),
          },
          body: JSON.stringify({query}),
      })
      .then((response) => response.json())
      .then((result) => {
          if(!result.errors){
              setTask(result.data.taskById)
          }else{
            navigation.navigate("Main")
          }
      });
  }, [])

  useEffect(() => {
    if(task.name) {
        setName(task.name);
        setDescription(task.description);
        setDate(new Date(task.date));
    }
  }, [task])

    // Sends the received information to the server
    const handleUpdate = async () => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Add 1 to month because it is zero-based
        const day = String(date.getDate()).padStart(2, '0');

        const stringDate = `${year}-${month}-${day}`;

        const mutation = `
        mutation {
            updateTask(task_id: "${slug}",task: {
              name: "${name}"
              description:"${description}"
              date: "${stringDate}"
            }){
              MatchedCount
              ModifiedCount
              UpsertedCount
              UpsertedID
            }
          }
        `;
        fetch(API, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + await accessToken(),
            },
            body: JSON.stringify({query: mutation}),
        })
        .then((response) => response.json())
        .then((result) => {
            if(!result.errors){
              alert("Tarea actualizada correctamente.")
              var deepCopyList = JSON.parse(JSON.stringify(currentTasks));
              const indexToUpdate = deepCopyList.findIndex(item => item._id === slug);
              deepCopyList[indexToUpdate].name = name;
              deepCopyList[indexToUpdate].description = description;
              deepCopyList[indexToUpdate].date = stringDate;
              setCurrentTasks(deepCopyList)
              navigation.navigate("Main")            
            }
        });
    };

    return (
    <ScrollView contentContainerStyle={[styles.backgroundContainer, theme === 'light' ? styles.backgroundContainerLight:styles.backgroundContainerDark]}>
    <View style={styles.supremeFormContainer}>
        
    <Header />

    <View style={[styles.formContainer, (theme === "light" ? styles.formContainerDark: styles.formContainerLight)]}>
        
        <View style={styles.taskSectionTitleContainer}>
            <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
                <Image source={goBackIcon} style={styles.userEditIcon} />
            </TouchableOpacity>
            <Text style={styles.sectionTitle2}>editar tarea</Text>
        
        </View>
        
        <Text style={styles.inputText}>nombre</Text>

        <TextInput
          onChangeText={(text) => setName(text)}
          value={name}
          defaultValue={name}
          style={styles.inputField}
          required
        />

        <Text style={styles.inputText}>descripción</Text>
        <TextInput
          onChangeText={(text) => setDescription(text)}
          value={description}
          defaultValue={description}
          style={styles.inputField}
          required
        />

        <Text style={styles.inputText}>fecha</Text>


        <DateTimePicker
        value={date}
        defaultValue={date}
        onChange={setNewDate}
        style={styles.inputFieldDate}
        required
      />

        <TouchableOpacity
          onPress={handleUpdate}
          style={[styles.button2, theme === 'dark' ? styles.button2Light:styles.button2Dark]}
        >
          <Text style={styles.buttonText}>actualizar</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView >
    )
}

export default EditTask