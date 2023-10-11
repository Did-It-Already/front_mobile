import { useContext } from 'react';
import { ScrollView} from 'react-native';

import MyContext from '../context';

import Header from '../components/Header';
import UserSection from '../components/UserSection';
import CalendarSection from '../components/CalendarSection';
import TasksSection from "../components/TasksSection.jsx";

import styles from '../assets/styles';

function MainPage() {
  const {theme, currentHabits, currentTasks, currentUser} = useContext(MyContext)

  return (
    <ScrollView contentContainerStyle={[styles.backgroundContainer, theme === 'light' ? styles.backgroundContainerLight:styles.backgroundContainerDark]}>
        <Header />
        <UserSection user={currentUser} />
        <CalendarSection/> 
        <TasksSection isHabit={false} tasks={currentTasks}/>
        <TasksSection isHabit={true} tasks={currentHabits}/>
    </ScrollView>
  );
}

export default MainPage;