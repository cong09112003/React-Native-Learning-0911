import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NoteHomeScreen from "../note/NoteHomeScreen";
import AddNoteScreen from "../note/AddNoteScreen";
import MyNoteProvider from "../../context/MyNoteProvider";
import NoteDetailScreen from "../note/NoteDetailScreen";

const Stack = createNativeStackNavigator();

const NoteStack = () => {
  return (
    <>
      <MyNoteProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="NoteHome"
            component={NoteHomeScreen}
          ></Stack.Screen>
          <Stack.Screen name="AddNote" component={AddNoteScreen}></Stack.Screen>
          <Stack.Screen
            name="DetailNote"
            component={NoteDetailScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </MyNoteProvider>
    </>
  );
};

export default NoteStack;
