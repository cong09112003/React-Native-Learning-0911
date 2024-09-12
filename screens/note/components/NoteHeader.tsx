import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
type HeaderProps = {
  icon: string;
  title: String;
};

const NoteHeader = ({ icon, title }: HeaderProps) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 15,
          backgroundColor: "gray",
        }}
      >
        <Icon name={icon} size={30} color="#fff" />
        <Text
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "white",
          }}
        >
          {title}
        </Text>
      </View>
    </>
  );
};

export default NoteHeader;
