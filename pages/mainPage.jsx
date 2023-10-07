import { useContext } from 'react';
import { ScrollView} from 'react-native';

import MyContext from '../context';

import Header from '../components/Header';
import UserSection from '../components/UserSection';
import CalendarSection from '../components/CalendarSection';

import { user } from '../assets/constants';
import styles from '../assets/styles';

function MainPage() {

  const { theme } = useContext(MyContext);

  return (
    <ScrollView contentContainerStyle={[styles.backgroundContainer, theme === 'light' ? styles.backgroundContainerLight:styles.backgroundContainerDark]}>
        <Header />
        <UserSection user={user} />
        <CalendarSection user={user} /> 
    </ScrollView>
  );
}

export default MainPage;