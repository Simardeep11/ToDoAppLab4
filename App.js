import React, { useState } from 'react';
import ToDoList from "./Component/ToDoList";
import ToDoForm from "./Component/ToDoForm";
import { View, StyleSheet } from 'react-native';

const App = () => {
    const [tasks, setTasks] = useState([
      { text: 'Do laundry', completed: false },
      { text: 'Go to gym', completed: false },
      { text: 'Walk dog', completed: false },
    ]);

    const addTask = (taskText) => {
      const trimmedText = taskText.trim();
      // Prevent adding empty tasks or duplicates
      if (!trimmedText || tasks.some(task => task.text === trimmedText)) {
        return;
      }
      setTasks([...tasks, { text: trimmedText, completed: false }]);
    };

    return (
      <View style={styles.container}>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
});

export default App;