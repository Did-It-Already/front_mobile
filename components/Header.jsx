import { useContext } from 'react';
import { Image, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MyContext from '../context';

import darkLogo from '../assets/logos/darkLogo.png';
import lightLogo from '../assets/logos/lightLogo.png';
import styles from '../assets/styles';

function Header() {
  const { theme } = useContext(MyContext);
  const navigation = useNavigation();

  return (

    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
      <Image
        source={theme === 'light' ? lightLogo : darkLogo}
        style={styles.websiteLogo}
      />
    </TouchableOpacity>
  );
}


export default Header;