import React from "react";
import { Platform, ActivityIndicator  } from "react-native";
import {  ListItem,   Icon ,Image } from "react-native-elements";
import { createStackNavigator } from "react-navigation";
import { createBottomTabNavigator , Header} from "react-navigation-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import Settings from "../screens/Settings";
import News from "../screens/News";
import Gallery from "../screens/Gallery";
import Team from "../screens/Team";


const config = Platform.select({
  web: {},
  default: {}
});
const tabNavigator = createBottomTabNavigator({
  News,
  Team,
  HomeScreen,
  Gallery,
  Settings,

},
{
  initialRouteName: 'HomeScreen',
}
);

tabNavigator.path = "";

export default tabNavigator;
