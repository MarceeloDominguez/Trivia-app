import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
//import WebView from "react-native-webview";

export default function QuestionCard({
  question,
  numberQuestion,
  setNumberQuestion,
  answers,
  setGameOver,
  gameOver,
  questions,
  setScore,
  score,
  setUserAnswers,
  userAnswer,
  userAnswers,
}) {
  const nextQuestion = () => {
    const nextQuestion = numberQuestion + 1;

    if (nextQuestion === 10) {
      setGameOver(true);
    } else {
      setNumberQuestion(nextQuestion);
    }
  };

  const checkAnswer = (answer) => {
    if (!gameOver) {
      const correct = questions[numberQuestion].correct_answer === answer;

      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[numberQuestion].question,
        answer,
        correct,
        correctAnswer: questions[numberQuestion].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginHorizontal: 18,
        }}
      >
        <Text style={{ textAlignVertical: "center", fontWeight: "bold" }}>
          Score:{" "}
        </Text>
        {!gameOver ? (
          <View
            style={{
              borderRadius: 10,
              paddingHorizontal: 5,
              backgroundColor: "red",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>{score}</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.containerQuestion}>
        <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
          {question}
        </Text>
      </View>

      {answers?.map((answer) => (
        <TouchableOpacity
          disabled={userAnswer ? true : false}
          activeOpacity={0.8}
          style={[
            styles.answers,
            {
              backgroundColor:
                userAnswer?.correctAnswer === answer
                  ? "#AECB80"
                  : userAnswer?.answer === answer
                  ? "#FC4521"
                  : "#EAECEE",
            },
          ]}
          key={answer}
          onPress={() => checkAnswer(answer)}
        >
          <Text style={{ textAlign: "center", fontWeight: "700" }}>
            {answer}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        onPress={nextQuestion}
        activeOpacity={0.8}
        style={styles.containerButtonNextQuestion}
      >
        {!gameOver &&
        userAnswers.length === numberQuestion + 1 &&
        numberQuestion !== 11 - 1 ? (
          <Text style={styles.textButton}>Next question</Text>
        ) : null}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerQuestion: {
    marginVertical: 10,
    marginHorizontal: 18,
    height: 130,
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: "#FCBE73",
    borderRadius: 5,
  },

  answers: {
    marginHorizontal: 18,
    marginVertical: 5,
    paddingVertical: 10,
    borderRadius: 50,
    elevation: 2,
  },

  containerButtonNextQuestion: {
    marginHorizontal: 100,
    marginVertical: 10,
    backgroundColor: "#EAECEE",
    borderRadius: 50,
    elevation: 2,
  },

  textButton: {
    textAlign: "center",
    padding: 5,
    fontSize: 18,
    color: "#000",
  },
});
