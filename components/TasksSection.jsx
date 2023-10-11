import { useState, useContext,useEffect} from "react";
import { View, Text, TouchableOpacity , ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import MyContext from '../context.js';

import TaskCard from "./TaskCard.jsx";

import styles from "../assets/styles.js";

function TasksSection({isHabit, tasks}) {
    const {theme} = useContext(MyContext)
    const [tasksNotDone, setTasksNotDone] = useState(0)
    const[orderedTasks, setOrderedTasks] = useState([])
    
    const navigation = useNavigation()

    useEffect(()=>{
        setTasksNotDone(tasks.filter(task => !task.is_done || task.is_done === "false").length);
        setOrderedTasks(tasks.sort((a, b) => (a.is_done === b.is_done) ? 0 : (a.is_done == true || a.is_done == "true") ? 1 : -1));
    }, [tasks])

    // It renders the task cards
    function TaskCards() {
        if (tasks.length == 0) {
            return <View style={styles.text4container}><Text style={styles.text4}>No tienes {isHabit ? 'ningún hábito':'ninguna tarea'}</Text></View>
        } else {
        return (
            <ScrollView contentContainerStyle={styles.text5container}>
                {orderedTasks.map((task) => (
                    <TaskCard task = {task} isHabit={isHabit}/>
                ))}
            </ScrollView>
        );
        }
    }

    return (
        <View style={[styles.formContainer2,  (theme === (isHabit ? "dark": "light") ? styles.formContainerDark: styles.formContainerLight)]}>
            <TouchableOpacity style={[styles.addButton, (theme === (isHabit ? "dark": "light") ? styles.addButtonDark: styles.addButtonLight)]} onPress={()=> navigation.navigate(isHabit ? "CrearHabito":"CrearTarea")}>
                <Text style={[styles.addButtonText, (theme === (isHabit ? "dark": "light") ? styles.addButtonTextDark: styles.addButtonTextLight)]}>+</Text>
            </TouchableOpacity>
            
           <Text style={styles.sectionTitle3}>{isHabit ? 'hábitos':'tareas'}</Text>

            <TaskCards/>
            {tasks.length > 0 ? 
            <Text style={styles.text6}>
                Tienes {tasksNotDone} {isHabit ? 'hábito(s)':'tarea(s)'} pendientes
            </Text>
            :
            <></>}
        </View>
    )
}

export default TasksSection