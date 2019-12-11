import React from "react";
import { Text, View, ScrollView, ActivityIndicator } from "react-native";
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  Header,
  ListItem,
  SocialIcon,
  Icon,
  Image
} from "react-native-elements";

const TabIcon = props => (
  <Icon
    name="md-images"
    type="ionicon"

    // size={35}
  />
);
const list = [
  {
    EventTitle: "Basketball Tournament",
    EventDate: "10/12/12",
    image_url: "https://source.unsplash.com/300x500/?basketball"
  },
  {
    EventTitle: "Cricket Tournament",
    EventDate: "10/12/12",
    image_url: "https://source.unsplash.com/300x500/?cricket"
  },
  {
    EventTitle: "Football Tournament",
    EventDate: "10/12/12",
    image_url: "https://source.unsplash.com/300x500/?Football"
  },
  {
    EventTitle: "Hockey Tournament",
    EventDate: "10/12/12",
    image_url: "https://source.unsplash.com/300x500/?Hockey"
  }
];

class Gallery extends React.Component {
  static navigationOptions = {
    tabBarIcon: TabIcon
  };
  state = {};

  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: "Gallery",
            style: { fontWeight: "bold", color: "#fff" }
          }}
        />
        <ScrollView>
          {list.map((l, i) => (
            <View
              style={{ borderBottomColor: "black", borderBottomWidth: 0.5 }}
              key={i}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  marginTop: 2,
                  marginLeft: 3,
                  marginRight: 3
                }}
              >
                {l.EventTitle}
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  marginLeft: 3,
                  marginRight: 3
                }}
              >
                {l.EventDate}
              </Text>
              <Image
                source={{ uri: l.image_url }}
                style={{ height: 300 }}
                PlaceholderContent={<ActivityIndicator />}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
export default Gallery;
