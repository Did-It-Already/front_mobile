import { useState, useContext,useEffect} from "react";
import { useNavigation } from "@react-navigation/native";

import { View, Text,ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';

import MyContext from '../context.js';

import goBackIcon from "../assets/icons/goBackIcon.png";

import { deleteAsyncStorage, accessToken, saveTheme } from "../assets/functions.js";
import { API } from "../assets/constants.js";
import styles from '../assets/styles';

import Header from '../components/Header';

function UserEdit() {
    const {theme, setTheme, currentUser,setCurrentUser, setCurrentTasks, setCurrentHabits} = useContext(MyContext);
    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(()=>{
        if(currentUser.name){
            setName(currentUser.name);
            setLastName(currentUser.last_name);
            setEmail(currentUser.email);
        }
    }, [currentUser])

    const logout = () => {
        deleteAsyncStorage();
        setCurrentUser({})
        setCurrentTasks([])
        setCurrentHabits([])
        navigation.navigate("Inicio");
    }

    async function handleUpdate() {
        const mutation = `
        mutation {
            updateUser(user:{
              name: "${name}"
              last_name: "${lastName}"
              theme: "${theme}"
            }){
              name
              last_name
              email
              theme
              profile_picture
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
                setCurrentUser(result.data.updateUser)
                saveTheme(theme);
                alert("Sus datos fueron actualizados correctamente.")
                navigation.navigate("Main")
            }
        });  
      };

    // Sends the received information to the server
    const handleDelete = async () => {
        const mutation = `
        mutation {
            deleteUser{
              message
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
                alert("Su cuenta ha sido eliminada.")
                logout()
            }
        }); 
    };

    return (

    <ScrollView contentContainerStyle={[styles.backgroundContainer, theme === 'light' ? styles.backgroundContainerLight:styles.backgroundContainerDark]}>
    <View style={styles.supremeFormContainer}>
        
      <Header />

      <View style={[styles.formContainer, styles.formContainerLight]}>
        
        <View style={styles.taskSectionTitleContainer}>
            <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
                <Image source={goBackIcon} style={styles.userEditIcon} />
            </TouchableOpacity>
            <Text style={styles.sectionTitle2}>gestionar cuenta</Text>
        </View>
      
        <Text style={styles.inputText}>nombre(s)*</Text>
        
        <TextInput
          onChangeText={(text) => setName(text)}
          value={name}
          defaultValue={name}
          style={styles.inputField}
          required
        />

        <Text style={styles.inputText}>apellido(s)*</Text>
        <TextInput
          onChangeText={(text) => setLastName(text)}
          value={lastName}
          defaultValue={lastName}
          style={styles.inputField}
          required
        />

        <Text style={styles.inputText}>correo electrónico*</Text>
        <Text style={styles.inputTextEmail}>{email}</Text>

        <Text style={styles.inputText}>tema</Text>
        <TouchableOpacity
          onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          style={styles.themeButton}
        >
          <Text style={styles.inputText}>{theme === 'light' ? 'claro' : 'oscuro'}</Text>
        </TouchableOpacity>


        <View style={styles.twoButtonsContainer}>
            <TouchableOpacity style={[styles.button1,styles.button1Dark]} onPress={handleUpdate}>
            <Text style={styles.buttonTextDark}>actualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button1,styles.button1Red]} onPress={handleDelete} color="red">
            <Text style={styles.buttonText}>eliminar</Text>
            </TouchableOpacity>
        </View>

      </View>
    </View>
    </ScrollView >)
}

export default UserEdit


