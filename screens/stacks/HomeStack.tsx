import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../home/HomeScreen";
import Detail from "../Detail";

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

export default HomeStack;
