
import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper'
import { RoundedButton } from '../components/roundedButton'


export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.textInput} 
          onChangeText={setSubject} 
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => addSubject(subject)}/>
        </View>
      </View>
    </View>

)}

const styles = StyleSheet.create({
  container: {
    flex: .2,
  },
  inputcontainer: {
    padding: 25,
    justifyContent: 'top',
    color: 'white',
    flexDirection: 'row'
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    justifyContent: 'center',
  } 
})






