import { useState, useContext } from 'react';
import { View, Text,ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MyContext from '../context';

import Header from '../components/Header';

import styles from '../assets/styles';

import { setAccessToken, setRefreshToken , saveTheme,getUserInfo,getHabits,getTasks} from '../assets/functions';
import { API } from '../assets/constants';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { theme, setCurrentUser, setCurrentHabits, setCurrentTasks} = useContext(MyContext);
  const navigation = useNavigation();

  // Sends the received information to the server
  function handleSubmit() {
      const mutation = `
          mutation {
              login(user: {
                  email: "${email}"
                  password: "${password}"
              }) {
                  access
                  refresh
                  status
              }
          }
      `;

      fetch(API, {
          method: 'POST',
          mode: "cors",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({query: mutation}),
      })
      .then((response) => response.json())
      .then((result) => {
          if(!result.errors){
            var access = result.data.login.access
            var refresh = result.data.login.refresh
            setAccessToken(access);
            setRefreshToken(refresh);
            getUserInfo(access).then((userData) => {
                setCurrentUser(userData)
                saveTheme(userData.theme);
            })
            getHabits(access).then((habits) => {setCurrentHabits(habits)})
            getTasks(access).then((tasks) => {setCurrentTasks(tasks)})
            navigation.navigate('Main');
          }else{
            alert("Usuario o contraseña incorrectos.")
          }
      });  
    };

  return (
    <ScrollView contentContainerStyle={[styles.backgroundContainer, theme === 'light' ? styles.backgroundContainerLight:styles.backgroundContainerDark]}>
    <View style={styles.supremeFormContainer}>
    <Header />
      <View style={styles.formTitleContainer}>
      <Text style={[styles.formTitle, theme === 'light' ? styles.formTitleLight:styles.formTitleDark]}>login</Text>
      </View>
      <View style={[styles.formContainer, theme === 'light' ? styles.formContainerLight: styles.formContainerDark]}>
        <Text style={styles.inputText}>correo electrónico*</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.inputField}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          required
        />

        <Text style={styles.inputText}>contraseña*</Text>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={styles.inputField}
          secureTextEntry
          required
        />

        <TouchableOpacity
          onPress={()=>handleSubmit()}
          style={[styles.button2, theme === 'light' ? styles.button2Light:styles.button2Dark]}
        >
          <Text style={styles.buttonText}>ingresar</Text>
        </TouchableOpacity>

        <View style={styles.goToLoginContainer}>
          <Text style={styles.inputText}>¿no tienes cuenta?&nbsp;</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={[styles.goToLoginLink, theme === 'light' ? styles.goToLoginLinkLight:styles.goToLoginLinkDark]}>registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

export default Login;
