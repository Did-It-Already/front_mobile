import { useState, useContext, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";

import { View, Text,ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';


import MyContext from '../context.js';

import Header from "../components/Header.jsx";

import goBackIcon from "../assets/icons/goBackIcon.png";

import { accessToken } from "../assets/functions.js";

import { API } from "../assets/constants.js";

import styles from "../assets/styles.js";

function EditHabit({ route }) {
    const {theme,setCurrentHabits, currentHabits} = useContext(MyContext);
    const navigation = useNavigation();
    const { slug } = route.params;

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [frequency, setFrequency] = useState("");
    const [habit, setHabit] = useState({});

    useEffect(async ()=>{
      const query = `
      query {
          userHabits(_id: "${slug}"){
            name
            start_date
            description
            _id
            is_done
            frequency
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
              setHabit(result.data.userHabits[0])
          }else{
              navigation.navigate("Main")
          }
      });
  }, [])

  useEffect(()=>{
    if(habit.name){
        setName(habit.name);
        setDescription(habit.description);
        setFrequency(habit.frequency.toString());
    }
  }, [habit])

    // Sends the received information to the server
    const handleUpdate = async () => {
        const mutation = `
        mutation {
            updateHabit(_id: "${slug}", habit: {
              name: "${name}"
              description: "${description}"
              frequency: ${frequency}
            }){
              name
              start_date
              description
              frequency
              _id
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
              alert("Hábito actualizado correctamente.")
              var deepCopyList = JSON.parse(JSON.stringify(currentHabits));
              const indexToUpdate = deepCopyList.findIndex(item => item._id === slug);
              deepCopyList[indexToUpdate].name = name;
              deepCopyList[indexToUpdate].description = description;
              deepCopyList[indexToUpdate].frequency = frequency;
              setCurrentHabits(deepCopyList)
              navigation.navigate("Main")         
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
            <Text style={styles.sectionTitle2}>editar hábito</Text>
        
        </View>
        
        <Text style={styles.inputText}>nombre</Text>

        <TextInput
          onChangeText={(text) => setName(text)}
          value={name}
          style={styles.inputField}
          defaultValue={name}
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

        <Text style={styles.inputText}>frecuencia</Text>
        <TextInput
          onChangeText={(text) => setFrequency(text)}
          value={frequency}
          defaultValue={frequency}
          style={styles.inputField}
          keyboardType="numeric"
          required
        />

        <TouchableOpacity
          onPress={handleUpdate}
          style={[styles.button2, theme === 'light' ? styles.button2Light:styles.button2Dark]}
        >
          <Text style={styles.buttonText}>actualizar</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView >
    )
}

export default EditHabit