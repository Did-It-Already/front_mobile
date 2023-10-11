import { useState, useContext} from "react";
import { useNavigation } from "@react-navigation/native";

import { View, Text,ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


import MyContext from '../context.js';

import Header from "../components/Header.jsx";

import goBackIcon from "../assets/icons/goBackIcon.png";

import { accessToken, getTasks } from "../assets/functions.js";

import { API } from "../assets/constants.js";

import styles from "../assets/styles.js";

function CreateTask() {
    const {theme, setCurrentTasks} = useContext(MyContext);
    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date("2023-10-10"));

    const setNewDate = (event, date) => {
        setDate(date)
    };

    // Sends the received information to the server
    const handleSubmit = async () => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Add 1 to month because it is zero-based
        const day = String(date.getDate()).padStart(2, '0');

        const stringDate = `${year}-${month}-${day}`;

        const mutation = `
        mutation {
            createTask(task: {
              name: "${name}"
              description:"${description}"
              date: "${stringDate}"
            }){
              InsertedID
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
                alert("Tarea creada correctamente.")
                setTimeout(async function() {
                    getTasks(await accessToken()).then((tasks) => {
                        setCurrentTasks(tasks)
                        navigation.navigate("Main")
                    });
                }, 1500);             
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
            <Text style={styles.sectionTitle2}>crear tarea</Text>
        
        </View>
        
        <Text style={styles.inputText}>nombre</Text>

        <TextInput
          onChangeText={(text) => setName(text)}
          value={name}
          style={styles.inputField}
          required
        />

        <Text style={styles.inputText}>descripción</Text>
        <TextInput
          onChangeText={(text) => setDescription(text)}
          value={description}
          style={styles.inputField}
          required
        />

        <Text style={styles.inputText}>fecha</Text>


        <DateTimePicker
        value={date}
        onChange={setNewDate}
        style={styles.inputFieldDate}
        required
      />

        <TouchableOpacity
          onPress={handleSubmit}
          style={[styles.button2, theme === 'dark' ? styles.button2Light:styles.button2Dark]}
        >
          <Text style={styles.buttonText}>crear tarea</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView >
    )
}

export default CreateTask