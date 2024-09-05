import { Image, Text, View, StyleSheet } from "react-native";
import React from "react";
import NoteAddMore from "../components/NoteAddMore";
const ListCategory = () => {
  return (
    <>
      <NoteAddMore tile="Category" />
      <View style={styles.container}>
        <View>
          <Image
            style={styles.photoItem}
            source={require("../../assets/cate1.png")}
          />
        </View>
        <View>
          <Image
            style={styles.photoItem}
            source={require("../../assets/cate2.png")}
          />
        </View>
        <View>
          <Image
            style={styles.photoItem}
            source={require("../../assets/cate3.png")}
          />
        </View>
        <View>
          <Image
            style={styles.photoItem}
            source={require("../../assets/cate4.png")}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between" },
  photoItem: {
    width: 80,
    height: 80,
    borderWidth: 1,
    // padding: 0,
    borderRadius: 10,
    overflow: "hidden",
    // borderColor: "black",
  },
});
export default ListCategory;
