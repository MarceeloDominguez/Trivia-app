import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useTrivia } from "../hook/useTrivia";
import difficulty from "../util/difficulty";
import { Title } from "react-native-paper";
//component
import QuestionsAndAnswers from "../components/QuestionsAndAnswers";

export default function QuestionScreen({ route }) {
  const navigation = useNavigation();
  const [typeDifficulty, setTypeDifficulty] = useState([]);
  const [visibility, setVisibility] = useState(false);

  const { idCategory, nameCategory } = route.params;
  const { idDifficulty } = typeDifficulty;

  const { resultsApi } = useTrivia(idCategory, idDifficulty);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Title>{nameCategory}</Title>,
      headerTitleAlign: "center",
    });
  }, []);

  const handleStart = (item) => {
    setTypeDifficulty(item);
    setVisibility(true);
  };

  return (
    <>
      <View style={{ backgroundColor: "#fff" }}>
        <FlatList
          data={difficulty}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.containerButton}>
              <TouchableOpacity
                onPress={() => handleStart(item)}
                activeOpacity={0.8}
                style={{
                  borderRadius: 50,
                  backgroundColor: "#AECB80",
                  elevation: 3,
                }}
              >
                <Text style={styles.textButton}>{item.nameDifficulty}</Text>
              </TouchableOpacity>
            </View>
          )}
          numColumns={3}
        />
      </View>
      {visibility && <QuestionsAndAnswers resultsApi={resultsApi} />}
    </>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },

  textButton: {
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 10,
    color: "#fff",
  },
});
