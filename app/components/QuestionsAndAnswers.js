import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import QuestionCard from "./QuestionCard";

export default function QuestionsAndAnswers({ resultsApi }) {
  const [questions, setQuestions] = useState([]);
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [gameOver, setGameOver] = useState(true);
  const [score, setScore] = useState(0);

  const randomQuestion = (array) => [...array].sort(() => Math.random() - 0.5);

  const startTrivia = () => {
    setGameOver(false);

    setQuestions(
      resultsApi.map((question) => ({
        ...question,
        answers: randomQuestion([
          ...question.incorrect_answers,
          question.correct_answer,
        ]),
      }))
    );

    setScore(0);
    setNumberQuestion(0);
    setUserAnswers([]);
  };

  return (
    <ScrollView
      style={{ backgroundColor: "#fff", flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      {gameOver || userAnswers.length === 11 ? (
        <TouchableOpacity
          onPress={startTrivia}
          style={styles.containerButtonStart}
          activeOpacity={0.8}
        >
          <Text style={styles.textButton}>Start</Text>
        </TouchableOpacity>
      ) : null}

      {!gameOver && (
        <QuestionCard
          question={questions[numberQuestion]?.question}
          numberQuestion={numberQuestion}
          setNumberQuestion={setNumberQuestion}
          answers={questions[numberQuestion]?.answers}
          setGameOver={setGameOver}
          gameOver={gameOver}
          questions={questions}
          score={score}
          setScore={setScore}
          setUserAnswers={setUserAnswers}
          userAnswer={userAnswers ? userAnswers[numberQuestion] : undefined}
          userAnswers={userAnswers}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerButtonStart: {
    marginHorizontal: 100,
    marginVertical: 130,
    backgroundColor: "#F23C27",
    borderRadius: 50,
    elevation: 2,
    paddingVertical: 10,
  },

  textButton: {
    textAlign: "center",
    padding: 5,
    fontSize: 20,
    color: "#fff",
  },
});
