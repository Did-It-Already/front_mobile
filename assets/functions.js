import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from "./constants";

export const deleteAsyncStorage = async () => {
   try {
     await AsyncStorage.removeItem('access');
     await AsyncStorage.removeItem('refresh');
     await AsyncStorage.removeItem('theme');
   } catch (error) {
     console.error('Error deleting items from AsyncStorage:', error);
   }
 };
  
export async function getUserInfo(token) {
  const graphqlQuery = `
    query {
      userById {
        name
        last_name
        email
        theme
        profile_picture
      }
    }
  `;

  try {
    const response = await fetch(API, {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + token,
      },
      body: JSON.stringify({ query: graphqlQuery }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const user = data.data.userById;

    if (user) {
      return user; 
    } else {
      throw new Error('No user found.');
    }
  } catch (error) {
    throw error;
  }
}

export async function getHabits(token) {
  const graphqlQuery = `
    query {
      userHabits{
        name
        start_date
        description
        _id
        is_done
      }
    }
  `;

  try {
    const response = await fetch(API, {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + token,
      },
      body: JSON.stringify({ query: graphqlQuery }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const habits = data.data.userHabits;

    if (habits) {
      return habits; 
    } else {
      throw new Error('No habits found.');
    }
  } catch (error) {
    throw error;
  }
}

export async function getTasks(token) {
  const graphqlQuery = `
    query {
      allTasks{
        _id
        name
        description
        date
        is_done
      }
    }
  `;

  try {
    const response = await fetch(API, {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + token,
      },
      body: JSON.stringify({ query: graphqlQuery }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const tasks = data.data.allTasks;

    if (tasks) {
      return tasks; 
    } else {
      throw new Error('No tasks found.');
    }
  } catch (error) {
    throw error;
  }
}


// Gets the refresh token from AsyncStorage
export const refreshToken = async () => {
  try {
    const refresh = await AsyncStorage.getItem('refresh');
    return refresh;
  } catch (error) {
    console.error('Error getting refresh token:', error);
    return null;
  }
};

// Gets the access token from AsyncStorage
export const accessToken = async () => {
  try {
    const access = await AsyncStorage.getItem('access');
    return access;
  } catch (error) {
    console.error('Error getting access token:', error);
    return null;
  }
};

// Checks if the user is logged in
export const loggedInUser = async () => {
  try {
    const refresh = await AsyncStorage.getItem('refresh');
    const access = await AsyncStorage.getItem('access');
    if(refresh != null && access != null){
      return true
    }else{
      return false;
    }
  } catch (error) {
    return false;
  }
};


// Set the access token in AsyncStorage
export const setAccessToken = async (access) => {
  try {
    await AsyncStorage.setItem('access', access);
  } catch (error) {
    console.error('Error setting access token in AsyncStorage:', error);
  }
}

// Set the refresh token in AsyncStorage
export const setRefreshToken = async (refresh) => {
  try {
    await AsyncStorage.setItem('refresh', refresh);
  } catch (error) {
    console.error('Error setting refresh token in AsyncStorage:', error);
  }
}

// Set the refresh token in AsyncStorage
export const saveTheme = async (theme) => {
  try {
    await AsyncStorage.setItem('theme', theme);
  } catch (error) {
    console.error('Error setting theme in AsyncStorage:', error);
  }
}