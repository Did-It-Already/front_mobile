import React, { useContext } from 'react';
import { Image, StyleSheet  } from 'react-native';
import MyContext from '../context';

import darkLogo from '../assets/logos/darkLogo.png';
import lightLogo from '../assets/logos/lightLogo.png';

import styles from '../assets/styles';


function Header() {
  const { theme } = useContext(MyContext);

  return (
    <Image
        source={theme === 'light' ? lightLogo : darkLogo}
        style={styles.websiteLogo}
    />
  );
}


export default Header;