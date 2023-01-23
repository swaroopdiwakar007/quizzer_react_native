import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}

const Quiz = ({navigation}) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const getQuiz=async()=>{
        const url = "https://opentdb.com/api.php?amount=10&encode=url3986";
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
        // console.log(res)
        setOptions(generateOptionsAndShuffle(data.results[0]))
    };
    useEffect(()=>{
        getQuiz()
    }, []);
    const handleNextPress=() => {
        setQues(ques + 1);
    };
    const generateOptionsAndShuffle = (_question) => {
        const options = [..._question.incorrect_answers];
        options.push(..._question.correct_answer);
        shuffleArray(options)
        console.log(options)
    };
  return (
    <View style={styles.container}>
        {questions && <View style={styles.parent}>
            <View style={styles.top}>
                <Text style={styles.questions}>{ques + 1}. {decodeURIComponent(questions[ques].question)}</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>SKIP</Text>
                </TouchableOpacity>
                
                {ques!==9 && <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                    <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>}
                {ques===9 && <TouchableOpacity style={styles.button} onPress={()=>{}}>
                    <Text style={styles.buttonText}>SHOW RESULT</Text>
                </TouchableOpacity>}
            </View>

        </View>}
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: "100%",
    },
    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    button: {
        backgroundColor: "#3C096C",
        padding: 16,
        paddingHorizontal: 20,
        borderRadius: 16,
        alignItems: "center",
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        fontWeight: "600",
    },
    questions: {
        fontSize: 28
    },
    option: {
        fontSize: 18,
        fontWeight: "400",
        color: "white"
    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: "#7B2CBF",
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    parent: {
        height: "100%"
    },
});