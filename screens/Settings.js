import React from "react";
import { Text, View, ScrollView, LinearGradient } from "react-native";
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Header, ListItem, SocialIcon, Icon } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";

import HomeScreen from "../screens/HomeScreen";
const TabIcon = (props) => (
  <Icon
    name="md-cog"
    type='ionicon'

    // size={35}
  />
)
const list = [
  {
    name: "Themes",
    subtitle: "Change setting here",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "Notifications",
    subtitle: "Change setting here",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  },
  {
    name: "Sound",
    subtitle: "Change setting here",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "Vibration",
    subtitle: "Change setting here",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  }
];

const list1 = [
  {
    name: "Nandana Varshney",
    subtitle: "9910712612 , nv@bennett.edu.in",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },

  {
    name: "Nanda Varshney",
    subtitle: "9910712612 , nv@bennett.edu.in",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  }
];
class Settings extends React.Component {

  static navigationOptions = {
    tabBarIcon: TabIcon
  };
  state = {};

  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: "Settings",
            style: { fontWeight: "bold", color: "#fff" }
          }}
        />
        <ScrollView>
          <View>
            <View
              style={{
                alignItems: "center",
                backgroundColor: "ghostwhite",
                paddingBottom: 20,
                paddingTop: 20
              }}
            >
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
                About Us Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Donec blandit justo purus, in convallis sapien porttitor
                eu. Integer porta facilisis arcu ac laoreet. Donec fringilla
                ante nec ligula laoreet, eget pharetra magna dapibus. Nam
                hendrerit in tortor posuere eleifend. Maecenas eget lorem felis.
                Suspendisse lorem diam, laoreet at vehicula in, volutpat nec
                nunc. Nulla facilisi. Proi
              </Text>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <SocialIcon type="twitter" />
                <Icon name="instagram" type="font-awesome" reverse />
                <SocialIcon type="facebook" />
                <SocialIcon type="medium" />
              </View>
            </View>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
                marginTop: 10,
                borderBottomColor: "black",
                borderBottomWidth: 2
              }}
            >
              App Settings
            </Text>
          </View>
          <ScrollView>
            <ScrollView>
              {list.map((l, i) => (
                <ListItem
                  key={i}
                  // leftAvatar={{ source: { uri: l.avatar_url } }}
                  title={l.name}
                  subtitle={l.subtitle}
                  bottomDivider
                />
              ))}
            </ScrollView>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 24,
                  marginTop: 10,
                  borderBottomColor: "black",
                  borderBottomWidth: 2
                }}
              >
                Contact Us
              </Text>
            </View>
            <ScrollView>
              {list1.map((k, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{ source: { uri: k.avatar_url } }}
                  title={k.name}
                  subtitle={k.subtitle}
                  bottomDivider
                />
              ))}
            </ScrollView>
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}
export default Settings;
