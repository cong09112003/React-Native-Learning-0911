import { Button, ScrollView, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import ListCategory from "./ListCategory";
import ListProduct from "./ListProduct";
const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListCategory />
        <Button
          title="Go to Detail"
          onPress={() => {
            navigation.navigate("DetailItem");
          }}
        />
        <ListProduct />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
