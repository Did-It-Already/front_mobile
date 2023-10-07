import { useState, useContext } from 'react';
import { View, Text,ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MyContext from '../context';

import Header from '../components/Header';

import styles from '../assets/styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { theme } = useContext(MyContext);
  const navigation = useNavigation();

  // Sends the received information to the server
  const handleSubmit = () => {
    const body = {
      email: email,
      password: password,
    };

    alert(JSON.stringify(body));

    fetch('http://127.0.0.1:8000/users/', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(body), // Make sure to send JSON data
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.user_id) {
          alert('Usuario creado correctamente');
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
          onPress={handleSubmit}
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
