import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Header, Icon, Card, ListItem, Button } from "react-native-elements";
const list = [
  {
    name: "Nandana Varshney",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Secretary "
  },
  {
    name: "Nandana Varshney",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Secretary "
  },
  {
    name: "Nandana Varshney",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Secretary "
  },
  {
    name: "Nandana Varshney",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Secretary "
  }
];
const list1 = [
  {
    name: "Nandana Varshney",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Secretary "
  },
  {
    name: "Nandana Varshney",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Secretary "
  },
  {
    name: "Nandana Varshney",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Secretary "
  },
  {
    name: "Nandana Varshney",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Secretary "
  }
];
const TabIcon = props => (
  <Icon
    name="md-contacts"
    type="ionicon"

    // size={35}
  />
);
class House extends React.Component {
  static navigationOptions = {
    tabBarIcon: TabIcon
  };
  state = {};

  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: "House Details",
            style: { fontWeight: "bold", color: "#fff" }
          }}
        />
        <ScrollView>
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
              The Sports Committee{" "}
            </Text>
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
              Wall Of Fame
            </Text>
          </View>
          <ScrollView>
            {list1.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                subtitle={l.subtitle}
                bottomDivider
              />
            ))}
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}
export default House;
