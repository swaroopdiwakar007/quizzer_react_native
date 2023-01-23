import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Result = ({navigation}) => {
  return (
    <View>
        <View>
            <Text>Result</Text>
        </View>
        <View style={styles.bannerContainer}>
        <Image source={
          {
            uri:"https://img.freepik.com/free-vector/happy-participants-playing-quiz-game-tv-show-host-with-microphone-asking-questions_74855-10770.jpg?w=2000"
          }}
          style={styles.banner}
          resizeMode="contain" />
        </View>
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <Text>
                    HOME
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
    banner: {
        height:300,
        width: 300
      },
      bannerContainer: {
        justifyContent: "center",
        alignItems: "center"
      },
      container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: "100%",
      }
})