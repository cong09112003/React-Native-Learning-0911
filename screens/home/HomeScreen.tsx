import { Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import ListCategory from "./ListCategory";
import ListProduct from "./ListProduct";
const HomeScreen = () => {
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <Header />
      <ListCategory />
      <ListProduct />
    </View>
  );
};

export default HomeScreen;
