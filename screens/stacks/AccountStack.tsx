import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../login/LoginScreen";
import RegisterScreen from "../login/RegisterScreen";
import Account from "../Account";

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Account" component={Account}></Stack.Screen>
        {/* <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen> */}
      </Stack.Navigator>
    </>
  );
};

export default AccountStack;
