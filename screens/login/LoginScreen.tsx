import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  TextInput,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import CheckBox from "expo-checkbox";

const LoginScreen = () => {
  const [isCheck, setIsCheck] = useState(false);
  const setValueChange = () => {
    setIsCheck(!isCheck);
    Alert.alert("check ok!");
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"}></StatusBar>
      <View style={styles.title}>
        <Text style={{ fontWeight: "bold", fontSize: 30, color: "black" }}>
          LOGIN
        </Text>
        <Text>By signing in your are agreeing</Text>
        <View style={{ flexDirection: "row" }}>
          <Text>our</Text>
          <TouchableOpacity onPress={() => Alert.alert("changing form!")}>
            <Text style={{ color: "#1bcdff" }}>Term and privacy policy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.group}>
          <Icon name="email" style={styles.icon} />
          <TextInput placeholder="Email Address" style={styles.ip}></TextInput>
        </View>
        <View style={styles.group}>
          <Icon name="locked" style={styles.icon} />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.ip}
          ></TextInput>
        </View>
        <View style={styles.groupCheck}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBox
              disabled={false}
              value={isCheck}
              onValueChange={() => setValueChange()}
              color={isCheck ? "red" : undefined}
            ></CheckBox>
            <Text style={{ marginLeft: 5 }}>Remember password</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => Alert.alert("forget password form!")}
            >
              <Text style={{ color: "#1bcdff" }}>Forgot password</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Login</Text>
        </TouchableOpacity>
        <View style={styles.linkApps}>
          <View style={styles.linkAppsItems}>
            <Image source={require("../../assets/facebook 1.png")} />
          </View>
          <View style={styles.linkAppsItems}>
            <Image source={require("../../assets/instagram 1.png")} />
          </View>
          <View style={styles.linkAppsItems}>
            <Image source={require("../../assets/pinterest 1.png")} />
          </View>
        </View>
      </View>
      <View>
        <Image
          source={require("../../assets/Subtract.png")}
          style={{ width: "100%" }}
        ></Image>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between", // Adjusts the content positioning
  },
  main: {
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    marginTop: 30,
    alignItems: "center",
  },
  form: { marginTop: 30, paddingHorizontal: 30 },
  group: { marginTop: 30 },
  ip: {
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    borderColor: "gray",
    paddingLeft: 35,
    top: 10,
  },
  icon: {
    fontSize: 25,
    position: "absolute",
    top: 10,
    zIndex: 1000,
  },
  groupCheck: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    marginTop: 30,
    backgroundColor: "#1bcdff",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  linkApps: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  linkAppsItems: {
    marginLeft: 10,
  },
});

export default LoginScreen;
