import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Title } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//data
import categories from "../util/categories";
//components
import RenderCategories from "../components/RenderCategories";

export default function CategoriesScreen() {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ marginTop: top, flex: 1 }}>
      <Title style={{ textAlign: "center", marginVertical: 30 }}>
        Categories
      </Title>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => <RenderCategories categoriesItem={item} />}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
