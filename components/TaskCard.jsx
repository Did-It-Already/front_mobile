import { useContext, useEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";

import { View, Text, TouchableOpacity, Image } from 'react-native';


import editIconLight from "../assets/icons/editIconLight.png";
import editIconDark from "../assets/icons/editIconDark.png";

import deleteIconLight from "../assets/icons/deleteIconLight.png";
import deleteIconDark from "../assets/icons/deleteIconDark.png";

import MyContext from '../context.js';

import { accessToken } from "../assets/functions";
import { API } from "../assets/constants";
import styles from "../assets/styles";

function TaskCard({task, isHabit}) {
  const {setCurrentHabits, currentHabits, setCurrentTasks, currentTasks} = useContext(MyContext);
  const [date, setDate]= useState('')

  useEffect(()=> {
    if(task.date){
      var parts = task.date.split('-');
      var year = parts[0];
      var month = parts[1];
      var day = parts[2];
      setDate(`${day}/${month}/${year}`);
    }
  }, [task])

  const navigation = useNavigation()

  const goToEdit = () => {
    if(isHabit){
      navigation.navigate("EditarHabito", { slug: `${task._id}` }) 
    }else{
      navigation.navigate("EditarTarea", { slug: `${task._id}` })
    }
  }

  const markDoneHabit = async () => {
    const mutation = `
      mutation {
        updateHabitIsDone(_id:"${task._id}")
      }
      `;

      fetch(API, {
          method: 'POST',
          mode: "cors",
          headers: {
              'Content-Type': 'application/json',
              "Authorization": "Bearer " + await accessToken(),
          },
          body: JSON.stringify({query: mutation}),
      })
      .then((response) => response.json())
      .then((result) => {
          if(!result.errors){
            var deepCopyList = JSON.parse(JSON.stringify(currentHabits));
            for (var i = 0; i < deepCopyList.length; i++) {
              if (deepCopyList[i]._id === task._id) {
                deepCopyList[i].is_done = !deepCopyList[i].is_done;
                break;
              }
            }
            setCurrentHabits(deepCopyList)
          }
      });
  }

  const markDoneTask = async () => {
    const mutation = `
      mutation {
        updateTaskIsDone(task_id: "${task._id}"){
          ModifiedCount
          MatchedCount
          UpsertedCount
          UpsertedID
        }
      }
    `;

    fetch(API, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + await accessToken(),
        },
        body: JSON.stringify({query: mutation}),
    })
    .then((response) => response.json())
    .then((result) => {
        if(!result.errors){
          var deepCopyList = JSON.parse(JSON.stringify(currentTasks));
          for (var i = 0; i < deepCopyList.length; i++) {
            if (deepCopyList[i]._id === task._id) {
              deepCopyList[i].is_done = deepCopyList[i].is_done == 'true' ? 'false': 'true';
              break;
            }
          }
          setCurrentTasks(deepCopyList)
        }
    });
  }

  const handleDeleteHabit = async() => {
    const mutation = `
    mutation {
        deleteHabit(_id:"${task._id}")
      }
    `;

    fetch(API, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + await accessToken(),
        },
        body: JSON.stringify({query: mutation}),
    })
    .then((response) => response.json())
    .then((result) => {
        if(!result.errors){
          setCurrentHabits(currentHabits.filter(item => item._id !== task._id));
          navigation.navigate("Main")
        }
    });
  };

  const handleDeleteTask = async() => {
    const mutation = `
    mutation {
        deleteTask( task_id: "${task._id}"){
            Msg
      }
    }
    `;

    fetch(API, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + await accessToken(),
        },
        body: JSON.stringify({query: mutation}),
    })
    .then((response) => response.json())
    .then((result) => {
        if(!result.errors){
            setCurrentTasks(currentTasks.filter(item => item._id !== task._id));
            navigation.navigate("Main")
        }
    });
  };

  const handleDelete = () => {
    if(isHabit){
      handleDeleteHabit()
    }else{
      handleDeleteTask()
    }
  }

  return (
    <TouchableOpacity
      style={[
        styles.taskCard,
        task.is_done === true || task.is_done === 'true' ? styles.dark : styles.light,
      ]}
    >
      <View style={styles.taskMainContainer}>
        <TouchableOpacity
          style={[
            styles.taskCheckbox,
            task.is_done === true || task.is_done === 'true' ? styles.taskCheckboxLight : styles.taskCheckboxDark,
          ]}
          onPress={isHabit ? markDoneHabit : markDoneTask}
        >
          <Text style={[styles.taskCardTitle,task.is_done === true || task.is_done === 'true' ? styles.dark2 : styles.light2,
      ]}>
            {task.is_done === true || task.is_done === 'true' ? '✓' : ''}
          </Text>
        </TouchableOpacity>
        <View style={styles.taskTextContainer}>
          <Text style={[styles.taskCardTitle,task.is_done === true || task.is_done === 'true' ? styles.dark2 : styles.light2,
      ]}>{task.name}</Text>
          <Text style={[styles.taskCardDescription,task.is_done === true || task.is_done === 'true' ? styles.dark2 : styles.light2,
      ]}>{task.description}</Text>
          {!isHabit && (
            <Text style={[styles.taskCardDate,task.is_done === true || task.is_done === 'true' ? styles.dark2 : styles.light2,
          ]}>
              <Text style={{ fontWeight: 'bold' }}>fecha:</Text> {date}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.taskEditButtonsContainer}>
        <TouchableOpacity
          style={styles.taskEditButton}
          title={`Editar ${isHabit ? 'hábito' : 'tarea'}`}
          onPress={goToEdit}
        >
          <Image
            source={
              task.is_done === true || task.is_done === 'true'
                ? editIconLight
                : editIconDark
            }
            style={styles.taskEditIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.taskEditButton}
          title={`Eliminar ${isHabit ? 'hábito' : 'tarea'}`}
          onPress={handleDelete}
        >
          <Image
            source={
              task.is_done === true || task.is_done === 'true'
                ? deleteIconLight
                : deleteIconDark
            }
            style={styles.taskEditIcon}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )

}

export default TaskCard;