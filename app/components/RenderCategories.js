import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, TouchableNativeFeedback, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function RenderCategories({ categoriesItem }) {
  const { nameCategory, icon } = categoriesItem.item;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#AECB80", true, 130)}
        onPress={() =>
          navigation.navigate("QuestionScreen", categoriesItem.item)
        }
      >
        <View style={{ padding: 10, borderRadius: 10 }}>
          <Icon name={icon} size={50} style={styles.icon} />
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            {nameCategory}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 12,
    marginVertical: 20,
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 10,
  },

  icon: {
    alignSelf: "center",
  },
});
