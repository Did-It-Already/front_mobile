import { useState, useContext } from 'react';
import { View, Text,ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MyContext from '../context';

import Header from '../components/Header';

import styles from '../assets/styles';
import { API } from "../assets/constants.js";

function Register() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const { theme, setTheme } = useContext(MyContext);
  const navigation = useNavigation();

  // Sends the received information to the server
  function handleSubmit() {
    const mutation = `
      mutation {
      register(user: {
          name: "${name}"
          last_name: "${lastName}"
          email: "${email}"
          password: "${password}"
          theme: "${theme}"
      }) {
          data {
          user {
              email
              user_id
          }
          }
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
        alert("Usuario creado correctamente.")
        navigation.navigate('Login')
      }else{
        alert("Este correo ya está registrado.")
      }
    });  
  };

  return (
    <ScrollView contentContainerStyle={[styles.backgroundContainer, theme === 'light' ? styles.backgroundContainerLight:styles.backgroundContainerDark]}>
    <View style={styles.supremeFormContainer}>
      <Header />
      <View style={styles.formTitleContainer}>
      <Text style={[styles.formTitle, theme === 'light' ? styles.formTitleLight:styles.formTitleDark]}>registro</Text>
      </View>
      <View style={[styles.formContainer, theme === 'light' ? styles.formContainerLight: styles.formContainerDark]}>
        <Text style={styles.inputText}>nombre(s)*</Text>
        <TextInput
          onChangeText={(text) => setName(text)}
          value={name}
          style={styles.inputField}
          required
        />

        <Text style={styles.inputText}>apellido(s)*</Text>
        <TextInput
          onChangeText={(text) => setLastName(text)}
          value={lastName}
          style={styles.inputField}
          required
        />

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

        <Text style={styles.inputText}>confirmar contraseña*</Text>
        <TextInput
          onChangeText={(text) => setPasswordAgain(text)}
          value={passwordAgain}
          style={styles.inputField}
          secureTextEntry
          required
        />

        <Text style={styles.inputText}>tema</Text>
        <TouchableOpacity
          onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          style={styles.themeButton}
        >
          <Text style={styles.inputText}>{theme === 'light' ? 'claro' : 'oscuro'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSubmit}
          style={[styles.button2, theme === 'light' ? styles.button2Light:styles.button2Dark]}
          disabled={passwordAgain !== password || password.length < 8}
          title={passwordAgain !== password ? 'Las contraseñas no coinciden' : password.length < 8 ? 'La contraseña debe tener al menos 8 caracteres' : ''}
        >
          <Text style={styles.buttonText}>registrarse</Text>
        </TouchableOpacity>

        <View style={styles.goToLoginContainer}>
          <Text style={styles.inputText}>¿ya tienes cuenta?&nbsp;</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.goToLoginLink, theme === 'light' ? styles.goToLoginLinkLight:styles.goToLoginLinkDark]}>iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView >
  );
}

export default Register;
