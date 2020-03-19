import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AddTodo({ submitHandler }) {
  [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  const pressHandler = () => {
    submitHandler(text);
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder='Add Todo'
        onChangeText={changeHandler} 
        value={text} 
      />
      <MaterialIcons name='add' size={30} style={styles.icon} onPress={pressHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  container: {
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: '#fff',
  }
});