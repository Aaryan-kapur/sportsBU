import React from "react";
import { Platform } from "react-native";
import {  ListItem } from "react-native-elements";
import { createStackNavigator } from "react-navigation";
import { createBottomTabNavigator , Header} from "react-navigation-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import Settings from "../screens/Settings";
import Details from "../screens/Details";

const config = Platform.select({
  web: {},
  default: {}
});
const tabNavigator = createBottomTabNavigator({
  Details,
  HomeScreen,
  Settings,


});
tabNavigator.path = "";

export default tabNavigator;
