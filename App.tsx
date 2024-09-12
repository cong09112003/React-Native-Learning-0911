// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Image, Text, View } from "react-native";

import {
  Image,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  StatusBar,
  PermissionsAndroid,
} from "react-native";
import HomeScreen from "./screens/home/HomeScreen";
import LoginScreen from "./screens/login/LoginScreen";
import Demo1 from "./screens/Demo1";
import Demo2 from "./screens/Demo2";
import NYC from "./screens/NYC";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Account from "./screens/Account";
import AccountStack from "./screens/stacks/AccountStack";
import NoteHomeScreen from "./screens/note/NoteHomeScreen";
import NoteStack from "./screens/stacks/NoteStack";
import TabNavigator from "./screens/TabNavigator";
import Detail from "./screens/Detail";
import RegisterScreen from "./screens/login/RegisterScreen";

// const Home = ({ navigation }: any) => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="To Detail"
//         onPress={() =>
//           navigation.navigate("Detail", {
//             name: "Minh Trang 1310",
//             obj: { id: 1, name: "MinhTrang", price: "100", unit: "$" },
//           })
//         }
//       />
//     </View>
//   );
// };

// const Detail = ({ route, navigation }: any) => {
//   const { name, obj } = route.params;
//   console.log(name, obj);
//   return (
//     <>
//       <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"}></StatusBar>
//       <View
//         style={{
//           backgroundColor: "gray",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           paddingVertical: 15,
//         }}
//       >
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text>Back</Text>
//         </TouchableOpacity>
//         <Text>Ring!</Text>
//       </View>
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Detail Screen</Text>
//         <Text>Nick name: {name}</Text>
//         <Text>Họ và tên: {obj.name}</Text>
//         <Text>
//           Giá: {obj.price} ({obj.unit})
//         </Text>
//       </View>
//     </>
//   );
// };

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const requestCameraPermission = async () => {
  try {
    const checkPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    if (checkPermission === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("ok");
    } else {
      console.log("denied");
    }
  } catch (error) {}
};
const App = () => {
  return (
    <NavigationContainer>
      <>
        {/* <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator> */}
        <Stack.Navigator>
          <Stack.Screen
            name="HomeTab"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailItem"
            component={Detail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </>
    </NavigationContainer>
    // <LoginScreen />
    // <HomeScreen />
    // <Demo1 />
    // <Demo2 />
    // <NYC />
  );
};

export default App;
