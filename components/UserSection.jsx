import { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MyContext from '../context';

import { deleteAsyncStorage } from "../assets/functions.js";

import editIconLight from "../assets/icons/editIconLight.png";
import logoutIcon from "../assets/icons/logoutIcon.png";
import userBackgroundLight from "../assets/images/userBackgroundLight.png";
import userBackgroundDark from "../assets/images/userBackgroundDark.png";

import styles from '../assets/styles';

function UserSection({ user }) {
  const {theme, setCurrentUser, setCurrentTasks, setCurrentHabits} = useContext(MyContext)
  const navigation = useNavigation();

  const logout = () => {
    deleteAsyncStorage();
    setCurrentUser({})
    setCurrentTasks([])
    setCurrentHabits([])
    navigation.navigate("Inicio");
  }

  return (
    <View
      style={styles.userSectionContainer}
    >
    <View style={styles.userEditButtons}>
      <TouchableOpacity style={styles.userEditButton} onPress={() => {navigation.navigate("Usuario")}}>
          <Image source={editIconLight} style={styles.userEditIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.userEditButton} onPress={logout}>
          <Image source={logoutIcon} style={styles.userEditIcon} />
      </TouchableOpacity>
    </View>

      <Text style={styles.sectionTitle}>Mi perfil</Text>

      <Image
        source={
          user.profile_picture
            ? { uri: user.profile_picture }
            : theme === 'light'
            ? userBackgroundLight
            : userBackgroundDark
        }
        style={[styles.userImage,  user.profile_picture !== '' ? styles.userImageCustom: styles.userImageDefault]}
      />

      <View style={styles.userNameContainer}>
        <Text style={styles.userCardTitle}>{user.name}</Text>
        <Text style={styles.userCardDescription}>{user.last_name}</Text>
      </View>
    </View>
  );
}

export default UserSection;