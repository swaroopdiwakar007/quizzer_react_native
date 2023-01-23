import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import MyStack from './navigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
      <NavigationContainer styles={styles.container}>
        <MyStack />
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({});