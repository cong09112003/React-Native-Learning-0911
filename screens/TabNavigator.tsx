import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeStack from "./stacks/HomeStack";
import Cart from "./cart/Cart";
import Account from "./Account";
import HomeScreen from "./home/HomeScreen";
const Tab = createBottomTabNavigator();
const optionScreen = ({ route }: any) => ({
  tabBarIcon: ({ focused, color, size }: any) => {
    let iconName: string = "";

    if (route.name === "home") {
      iconName = focused ? "home" : "home-outline";
    } else if (route.name === "login") {
      iconName = focused ? "settings-sharp" : "settings-outline";
    } else if (route.name === "account") {
      iconName = focused ? "person-circle" : "person-circle-outline";
    } else if (route.name === "accountstack") {
      iconName = focused ? "person-circle" : "person-circle-outline";
    } else if (route.name === "nyc") {
      iconName = focused ? "heart-dislike-sharp" : "heart-dislike-outline";
    } else if (route.name === "notification") {
      iconName = focused ? "notifications-sharp" : "notifications-outline";
    } else if (route.name === "note") {
      iconName = focused ? "book" : "book-outline";
    } else if (route.name === "cart") {
      iconName = focused ? "cart" : "cart-outline";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "black",
  tabBarInactiveTintColor: "tomato",
  headerShown: false,
  tabBarStyle: { backgroundColor: "#1bcdff" },
  tabBarLabelStyle: { color: "black", fontweight: "bold" },
});
const TabNavigator = () => {
  return (
    <>
      <Tab.Navigator screenOptions={optionScreen}>
        <Tab.Screen name="home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="cart" component={Cart}></Tab.Screen>
        <Tab.Screen name="account" component={Account}></Tab.Screen>
      </Tab.Navigator>
    </>
  );
};
export default TabNavigator;
