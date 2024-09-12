import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const Demo1 = () => {
  return (
    <>
      <Text style={{ backgroundColor: "red", padding: 10 }}>
        Demo Scroll View
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ margin: 15 }}>
            <Text>Minh Trang</Text>
            <Image
              source={require("../assets/minhtrang.jpg")}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <View style={{ margin: 15 }}>
            <Text>Minh Trang</Text>
            <Image
              source={require("../assets/minhtrang.jpg")}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <View style={{ margin: 15 }}>
            <Text>Minh Trang</Text>
            <Image
              source={require("../assets/minhtrang.jpg")}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <View style={{ margin: 15 }}>
            <Text>Minh Trang</Text>
            <Image
              source={require("../assets/minhtrang.jpg")}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <View style={{ margin: 15 }}>
            <Text>Minh Trang</Text>
            <Image
              source={require("../assets/minhtrang.jpg")}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <View style={{ margin: 15 }}>
            <Text>Minh Trang</Text>
            <Image
              source={require("../assets/minhtrang.jpg")}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <View style={{ margin: 15 }}>
            <Text>Minh Trang</Text>
            <Image
              source={require("../assets/minhtrang.jpg")}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <View style={{ margin: 15 }}>
            <Text>Minh Trang</Text>
            <Image
              source={require("../assets/minhtrang.jpg")}
              style={{ width: 200, height: 200 }}
            />
          </View>
        </ScrollView>
        <View>
          <Text>Minh Trang</Text>
          <Image
            source={require("../assets/minhtrang.jpg")}
            style={{ width: "50%", height: 200 }}
          />
        </View>
        <View>
          <Text>Minh Trang</Text>
          <Image
            source={require("../assets/minhtrang.jpg")}
            style={{ width: "50%", height: 200 }}
          />
        </View>
        <View>
          <Text>Minh Trang</Text>
          <Image
            source={require("../assets/minhtrang.jpg")}
            style={{ width: "50%", height: 200 }}
          />
        </View>
        <View>
          <Text>Minh Trang</Text>
          <Image
            source={require("../assets/minhtrang.jpg")}
            style={{ width: "50%", height: 200 }}
          />
        </View>
        <View>
          <Text>Minh Trang</Text>
          <Image
            source={require("../assets/minhtrang.jpg")}
            style={{ width: "50%", height: 200 }}
          />
        </View>
        <View>
          <Text>Minh Trang</Text>
          <Image
            source={require("../assets/minhtrang.jpg")}
            style={{ width: "50%", height: 200 }}
          />
        </View>
        <View>
          <Text>Minh Trang</Text>
          <Image
            source={require("../assets/minhtrang.jpg")}
            style={{ width: "50%", height: 200 }}
          />
        </View>
        <View>
          <Text>Minh Trang</Text>
          <Image
            source={require("../assets/minhtrang.jpg")}
            style={{ width: "50%", height: 200 }}
          />
        </View>
      </ScrollView>
    </>
  );
};
export default Demo1;
