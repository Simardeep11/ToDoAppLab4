import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks, toggleCompletion }) => {
  return (
    <ScrollView style={styles.listContainer}>
      {tasks.map((task, index) => (
        <Pressable key={index} onPress={() => toggleCompletion ? toggleCompletion(index) : null}>
          <View style={[styles.task, task.completed ? styles.completed : null]}>
            <Text style={styles.taskText}>{task.text}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
  task: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 18,
  },
});

export default ToDoList;