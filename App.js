import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MyContext from './context';
import FirstPage from './pages/firstPage';
import Register from './pages/register';
import Login from './pages/login';
import MainPage from './pages/mainPage';
import UserEdit from './pages/userEdit';
import CreateHabit from './pages/createHabit';
import CreateTask from './pages/createTask';
import EditHabit from './pages/editHabit';
import EditTask from './pages/editTask';

import { useFonts } from 'expo-font';
import { loggedInUser, getUserInfo, accessToken, getHabits, getTasks} from './assets/functions.js';


const Stack = createNativeStackNavigator();

function App() {

  const [theme, setTheme] = useState('light'); 
  const [currentUser, setCurrentUser] = useState({});
  const [currentHabits, setCurrentHabits] = useState([]);
  const [currentTasks, setCurrentTasks] = useState([]);
 
  useEffect(async () => {
    AsyncStorage.getItem('theme')
      .then((storedTheme) => {
        if (storedTheme !== null) {
          setTheme(storedTheme);
        }
      })

    const loggedIn = await loggedInUser()
    const token = await accessToken()
    if(loggedIn){
      getUserInfo(token).then((userData) => {setCurrentUser(userData)})
      getHabits(token).then((habits) => {setCurrentHabits(habits)})
      getTasks(token).then((tasks) => {setCurrentTasks(tasks)})
    }
  }, []);

  useEffect(()=>{
    if(currentUser.name){
      setTheme(currentUser.theme)
    }
  }, [currentUser])

  // Load the custom font
  let [fontsLoaded] = useFonts({
    'LeagueSpartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <MyContext.Provider value={{ theme, setTheme, currentUser, setCurrentUser , currentHabits, setCurrentHabits, currentTasks, setCurrentTasks }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen name="Inicio" component={FirstPage} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component= { Login }/>
          <Stack.Screen name="Main" component={ MainPage} />
          <Stack.Screen name="Usuario" component={ UserEdit} />
          <Stack.Screen name="CrearHabito" component={ CreateHabit} />
          <Stack.Screen name="CrearTarea" component={ CreateTask} />
          <Stack.Screen name="EditarHabito" component={ EditHabit} />
          <Stack.Screen name="EditarTarea" component={ EditTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
}

export default App;