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
import Icon from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNotes } from "../../context/MyNoteProvider";
const NoteDetailScreen = ({ navigation, route }: any) => {
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
  const { item } = route.params;
  const converTime = (time: any) => {
    let date = new Date(time);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
  };
  const deleteItem = async (item: any) => {
    let newData = notes.filter((e: any) => e.time !== item.time);
    // console.log(newData);
    await AsyncStorage.setItem("notes", JSON.stringify(newData));
    getNotes();
    navigation.navigate("NoteHome");
  };
  return (
    <>
      <StatusBar
        backgroundColor={"#a79494"}
        barStyle={"dark-content"}
      ></StatusBar>
      <NoteHeader icon="close" title="Detail" />
      <View style={{ padding: 15, marginTop: 30 }}>
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
          <Text style={{ paddingTop: 15 }}>Time: {converTime(item.time)}</Text>
          <TouchableOpacity
            style={{ flexDirection: "row-reverse" }}
            onPress={() => deleteItem(item)}
          >
            <Icon name="delete" size={30}></Icon>
          </TouchableOpacity>
        </View>
      </View>

      {/* <TouchableOpacity
        style={styles.btn_add}
        onPress={() => navigation.navigate("AddNote")}
      >
        <Icon name="edit" size={30} color="white" />
      </TouchableOpacity> */}
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
export default NoteDetailScreen;
