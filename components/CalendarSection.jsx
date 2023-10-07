import { useEffect, useState,useContext} from 'react';
import { View, Text} from 'react-native';

import MyContext from '../context';

import { days, months } from '../assets/constants';
import styles from '../assets/styles';

function CalendarSection() {
  const { theme } = useContext(MyContext);

  const [hour, setHour] = useState('');
  const [minutes, setMinutes] = useState('');
  const [day, setDay] = useState('');
  const [dayNumber, setDayNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [amPm, setAmPm] = useState('am');

  function updateTime() {
    const currentDate = new Date();
    let currentHour = currentDate.getHours();

    if (currentHour >= 12) {
      setAmPm('pm');
      if (currentHour > 12) {
        currentHour -= 12;
      }
    } else if (currentHour === 0) {
      currentHour = 12;
    }
    setDay(days[currentDate.getDay()]);
    setDayNumber(currentDate.getDate().toString().padStart(2, '0'));
    setMonth(months[currentDate.getMonth()]);
    setYear(currentDate.getFullYear());
    setHour(currentHour.toString().padStart(2, '0'));
    setMinutes(currentDate.getMinutes().toString().padStart(2, '0'));
  }

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={[styles.calendarSectionContainer, theme ==='light' ? styles.calendarSectionContainerLight: styles.calendarSectionContainerDark]}>
      <View style={styles.dateContainer}>
        <Text style={styles.dayText}>{day}</Text>
        <Text style={styles.dayNumberText}>{dayNumber}</Text>
        <Text style={styles.monthText}>{month}</Text>
        <Text style={styles.yearText}>{year}</Text>
      </View>
      <View style={styles.verticalSeparator}></View>
      <View style={styles.dateContainer}>
        <Text style={styles.hourText}>{hour}</Text>
        <Text style={styles.minutesText}>{minutes}</Text>
        <Text style={styles.amPmText}>{amPm}</Text>
      </View>
    </View>
  );
}

export default CalendarSection;