import { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MyContext from '../context';

import Header from '../components/Header';

import styles from '../assets/styles';

function FirstPage() {
  const { theme } = useContext(MyContext);
  const navigation = useNavigation(); 

  const handleNavigation = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={[styles.backgroundContainer, theme === 'light' ? styles.backgroundContainerLight:styles.backgroundContainerDark]}>
    <Header />
    <TouchableOpacity onPress={handleNavigation}>
      <View style={[styles.button1, theme === 'light' ? styles.button1Light:styles.button1Dark]}>
        <Text style={theme === 'light' ? styles.buttonText:styles.buttonTextDark}>comenzar</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
}


export default FirstPage;