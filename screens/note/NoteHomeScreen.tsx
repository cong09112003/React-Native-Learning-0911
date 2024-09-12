import React, { useEffect, useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import NoteHeader from "./components/NoteHeader";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import { useNotes } from "../../context/MyNoteProvider";
const NoteHomeScreen = ({ navigation }: any) => {
  const [data, setData] = useState([]);
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("notes");
  //     console.log(value);
  //     if (value !== null) {
  //       // value previously stored
  //     }
  //     // await AsyncStorage.clear();
  //   } catch (err) {
  //     // err reading value
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  //   console.log("okokok");
  // }, []);
  const { notes, setNotes, getNotes }: any = useNotes();
  const deleteNote = async (item: any) => {
    let newData = notes.filter((e: any) => e.time !== item.time);
    // console.log(newData);
    await AsyncStorage.setItem("notes", JSON.stringify(newData));
    getNotes();
  };
  return (
    <>
      <StatusBar
        backgroundColor={"#a79494"}
        barStyle={"dark-content"}
      ></StatusBar>
      <NoteHeader icon="menu" title="My note" />

      <View style={{ padding: 15, marginTop: 30 }}>
        <FlatList
          data={notes}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailNote", { item })}
            >
              <View
                style={{
                  backgroundColor: "pink",
                  padding: 20,
                  borderRadius: 10,
                  marginTop: 20,
                }}
              >
                <Text style={{ fontWeight: "bold", marginBottom: 15 }}>
                  {item.title}
                </Text>
                <Text>{item.content}</Text>
                <TouchableOpacity
                  style={{ flexDirection: "row-reverse" }}
                  onPress={() => deleteNote(item)}
                >
                  <IconAntDesign name="delete" size={30}></IconAntDesign>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        style={styles.btn_add}
        onPress={() => navigation.navigate("AddNote")}
      >
        <Icon name="edit" size={30} color="white" />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btn_add: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "red",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
export default NoteHomeScreen;
