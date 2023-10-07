import { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import MyContext from '../context';

import editIconLight from '../assets/icons/editIconLight.png';
import userBackgroundLight from '../assets/images/userBackgroundLight.png';
import userBackgroundDark from '../assets/images/userBackgroundDark.png';
import styles from '../assets/styles';

function UserSection({ user }) {
  const { theme } = useContext(MyContext);

  return (
    <View
      style={styles.userSectionContainer}
    >

      <TouchableOpacity style={styles.userEditButton} onPress={() => {}}>
          <Image source={editIconLight} style={styles.userEditIcon} />
      </TouchableOpacity>

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