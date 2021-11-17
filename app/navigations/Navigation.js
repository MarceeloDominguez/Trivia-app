import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//components
import CategoriesScreen from "../screens/CategoriesScreen";
import QuestionScreen from "../screens/QuestionScreen";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{ headerTransparent: true, title: "" }}
      />
      <Stack.Screen
        name="QuestionScreen"
        component={QuestionScreen}
        options={{
          headerStyle: { elevation: 0 },
          cardStyle: { backgroundColor: "#fff" },
        }}
      />
    </Stack.Navigator>
  );
}
