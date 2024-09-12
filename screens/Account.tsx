import React from "react";
import {
  Button,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { launchCamera } from "react-native-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
const Account = ({ navigation }: any) => {
  const requestCameraPermission = async () => {
    try {
      const checkPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      if (checkPermission === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log("ok");
        const result = await launchCamera({
          mediaType: "photo",
          cameraType: "back",
        });
        console.log(result);
      } else {
        console.log("denied");
      }
    } catch (error) {}
  };
  return (
    <>
      {/* <SafeAreaView> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: "#27B7C0",
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={{ color: "white" }}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: "#27B7C0",
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text style={{ color: "white" }}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Choose picture"
        onPress={() => {
          requestCameraPermission();
        }}
      />
      {/* <View>
        <TouchableOpacity>
          <Text>History buying</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Waiting solve</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Finishing</Text>
        </TouchableOpacity>
      </View> */}
      {/* </SafeAreaView> */}
    </>
  );
};
export default Account;
