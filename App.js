import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MyContext from './context';
import FirstPage from './pages/firstPage';
import Register from './pages/register';
import Login from './pages/login';
import MainPage from './pages/mainPage';

import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

function App() {

  const [theme, setTheme] = useState('light'); 

  useEffect(() => {
    AsyncStorage.getItem('theme')
      .then((storedTheme) => {
        if (storedTheme !== null) {
          setTheme(storedTheme);
        }
      })
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('theme', theme)
  }, [theme]);

  // Load the custom font
  let [fontsLoaded] = useFonts({
    'LeagueSpartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen name="Inicio" component={FirstPage} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Main" component={MainPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
}

export default App;