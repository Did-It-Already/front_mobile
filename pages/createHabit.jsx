import { useState, useContext} from "react";
import { useNavigation } from "@react-navigation/native";

import { View, Text,ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';


import MyContext from '../context.js';

import Header from "../components/Header.jsx";

import goBackIcon from "../assets/icons/goBackIcon.png";

import { accessToken, getHabits } from "../assets/functions.js";

import { API } from "../assets/constants.js";

import styles from "../assets/styles.js";

function CreateHabit() {
    const {theme,setCurrentHabits} = useContext(MyContext);
    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [frequency, setFrequency] = useState("");

    // Sends the received information to the server
    const handleSubmit = async () => {
        const mutation = `
        mutation {
            createHabit( habit: {
              name: "${name}"
              description:"${description}"
              frequency: ${frequency}
            }){
              name
              start_date
              description
              
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
                alert("Hábito creado correctamente.")
                setTimeout(async function() {
                    getHabits(await accessToken()).then((habits) => {
                        setCurrentHabits(habits)
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

    <View style={[styles.formContainer, (theme === "dark" ? styles.formContainerDark: styles.formContainerLight)]}>
        
        <View style={styles.taskSectionTitleContainer}>
            <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
                <Image source={goBackIcon} style={styles.userEditIcon} />
            </TouchableOpacity>
            <Text style={styles.sectionTitle2}>crear hábito</Text>
        
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

        <Text style={styles.inputText}>frecuencia</Text>
        <TextInput
          onChangeText={(text) => setFrequency(text)}
          value={frequency}
          style={styles.inputField}
          keyboardType="numeric"
          required
        />

        <TouchableOpacity
          onPress={handleSubmit}
          style={[styles.button2, theme === 'light' ? styles.button2Light:styles.button2Dark]}
        >
          <Text style={styles.buttonText}>crear hábito</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView >
    )
}

export default CreateHabit