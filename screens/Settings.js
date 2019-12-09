import React from "react";
import { Text, View, ScrollView } from "react-native";
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Header, ListItem } from "react-native-elements";

import HomeScreen from "../screens/HomeScreen";

const list = [
  {
    name: "Themes",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "Notifications",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  },
  {
    name: "Sound",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "Vibration",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  },
  {
    name: "Video Quality",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "Themes",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "Notifications",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  },
  {
    name: "Sound",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "Vibration",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  },
  {
    name: "Video Quality",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  }
];
class Settings extends React.Component {
  state = {};

  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: "home", color: "#fff" }}
          centerComponent={{ text: "Settings", style: { color: "#fff" } }}
        />
        <View > 
          <View style={{ alignItems: "center", backgroundColor: "ghostwhite",paddingBottom:20, paddingTop:20 }}>
            <Text style={{ fontWeight: "bold" }}>Sports BU</Text>
            <Text style={{ textDecorationColor: "ghostwhite" }}>
              Version @0.0.1
            </Text>
            <Text
              style={{
                alignItems: "center",
                marginLeft: 10,
                marginRight: 10
              }}
            >
              About Us
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              blandit justo purus, in convallis sapien porttitor eu. Integer
              porta facilisis arcu ac laoreet. Donec fringilla ante nec ligula
              laoreet, eget pharetra magna dapibus. Nam hendrerit in tortor
              posuere eleifend. Maecenas eget lorem felis. Suspendisse lorem
              diam, laoreet at vehicula in, volutpat nec nunc. Nulla facilisi.
              Proi
            </Text>
          </View>
        </View>
        <ScrollView>
          {list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
export default Settings;
