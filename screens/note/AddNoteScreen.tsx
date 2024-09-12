import React, { useState } from "react";
import NoteHeader from "./components/NoteHeader";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNotes } from "../../context/MyNoteProvider";

const AddNoteScreen = ({ navigation }: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { notes, setNotes, getNotes }: any = useNotes();

  const save = async () => {
    let formData = {
      title,
      content,
      time: Date.now(),
    };
    // try {
    //   await AsyncStorage.setItem("notes", JSON.stringify(formData));
    //   navigation.navigate("NoteHome");
    // } catch (err) {
    //   console.log(err);
    // }
    // console.log(formData);
    try {
      const pushNotes = [...notes, formData];
      setNotes(pushNotes);
      console.log(pushNotes);
      await AsyncStorage.setItem("notes", JSON.stringify(pushNotes));
      navigation.navigate("NoteHome");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NoteHeader icon="close" title="Add new " />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ padding: 30 }}>
          <View>
            <TextInput
              placeholder="Title"
              placeholderTextColor="gray"
              style={styles.title_input}
              onChangeText={(value) => {
                setTitle(value);
              }}
            ></TextInput>
          </View>
          <View
            style={{
              marginTop: 30,
              height: 400,
              borderRadius: 10,
              borderWidth: 1,
            }}
          >
            <TextInput
              placeholder="Content"
              placeholderTextColor="gray"
              multiline={true}
              onChangeText={(value) => {
                setContent(value);
              }}
            ></TextInput>
          </View>
          <TouchableOpacity
            style={{
              width: "100%",
              backgroundColor: "red",
              padding: 15,
              marginTop: 30,
              borderRadius: 10,
            }}
            onPress={() => save()}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Save</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};
const styles = StyleSheet.create({
  title_input: { borderWidth: 1, borderRadius: 10, height: 50 },
});

export default AddNoteScreen;
