import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/Title'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title/>
      <View style={styles.bannerContainer}>
        <Image source={
          {
            uri:"https://img.freepik.com/free-vector/happy-participants-playing-quiz-game-tv-show-host-with-microphone-asking-questions_74855-10770.jpg?w=2000"
          }}
          style={styles.banner}
          resizeMode="contain" />
      </View>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Quiz')}
        style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner: {
      height:300,
      width: 300
    },
    bannerContainer: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: "100%",
    },
    button: {
        width: "100%",
        backgroundColor: "#3C096C",
        padding: 20,
        borderRadius: 16,
        alignItems: "center",
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        fontWeight: "600",
    }
  })